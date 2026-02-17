/**
 * Tool search functionality with Fuse.js
 * Implements Requirements 6.2: professional, highly accurate fuzzy matching
 */

import Fuse from 'fuse.js';
import { Tool } from '@/types/tool';
import { tools } from '@/config/tools';

/**
 * Search result with relevance score
 */
export interface SearchResult {
  tool: Tool;
  score: number;
  matchedField: 'name' | 'description' | 'features';
}

/**
 * Prepare searchable data for Fuse.js
 */
interface SearchableTool {
  id: string;
  slug: string;
  name: string;
  description: string;
  features: string[];
  tool: Tool;
}

/**
 * Get searchable tools list, optionally with localized content
 */
function getSearchableTools(
  localizedContent?: Record<string, { title: string; description: string }>
): SearchableTool[] {
  return tools.map((tool) => {
    const localized = localizedContent?.[tool.id];
    return {
      id: tool.id.replace(/-/g, ' '),
      slug: tool.slug.replace(/-/g, ' '),
      name: localized?.title || tool.id.replace(/-/g, ' '),
      description: localized?.description || '',
      features: tool.features.map(f => f.replace(/-/g, ' ')),
      tool,
    };
  });
}

/**
 * Fuse.js configuration
 */
const fuseOptions = {
  keys: [
    { name: 'name', weight: 1.0 },
    { name: 'slug', weight: 0.8 },
    { name: 'id', weight: 0.7 },
    { name: 'description', weight: 0.4 },
    { name: 'features', weight: 0.3 },
  ],
  threshold: 0.3, // Lower is more restrictive (0.0 = exact match)
  distance: 100, // Max distance for fuzzy match
  includeScore: true,
  ignoreLocation: true, // Search everywhere in the string
  useExtendedSearch: true, // Allows for advanced search operators
};

/**
 * Search tools by query string
 * Returns tools sorted by relevance score
 */
export function searchTools(
  query: string,
  localizedContent?: Record<string, { title: string; description: string }>
): SearchResult[] {
  const normalizedQuery = query.toLowerCase().trim();

  if (!normalizedQuery) {
    return [];
  }

  const searchableTools = getSearchableTools(localizedContent);
  const fuse = new Fuse(searchableTools, fuseOptions);
  const results = fuse.search(normalizedQuery);

  return results.map((result) => {
    // Determine matched field (Fuse doesn't give us this easily without more config,
    // but we can infer or default it for our needs)
    const matchedField = 'name'; // Defaulting to name for UI simplicity

    return {
      tool: result.item.tool,
      score: 1 - (result.score || 0), // Fuse score: 0 is perfect, we want 1 for perfect
      matchedField,
    };
  });
}

/**
 * Get search suggestions based on partial query
 */
export function getSearchSuggestions(query: string, limit: number = 5): string[] {
  const results = searchTools(query);
  return results
    .slice(0, limit)
    .map((result) => result.tool.id.replace(/-/g, ' '));
}

/**
 * Check if a tool matches a search query
 * Used for filtering tools in UI
 * Supports localized content for searching in current language
 */
export function toolMatchesQuery(
  tool: Tool,
  query: string,
  localizedContent?: { title: string; description: string }
): boolean {
  const normalizedQuery = query.toLowerCase().trim();

  if (!normalizedQuery) {
    return true; // Empty query matches all
  }

  // For individual matching, we can use a temporary fuse instance or simple checks.
  // Using Fuse for consistency.
  const toolName = localizedContent?.title || tool.id.replace(/-/g, ' ');
  const description = localizedContent?.description || '';
  const searchableTool: SearchableTool = {
    id: tool.id.replace(/-/g, ' '),
    slug: tool.slug.replace(/-/g, ' '),
    name: toolName,
    description,
    features: tool.features.map(f => f.replace(/-/g, ' ')),
    tool,
  };

  const fuse = new Fuse([searchableTool], fuseOptions);
  return fuse.search(normalizedQuery).length > 0;
}
