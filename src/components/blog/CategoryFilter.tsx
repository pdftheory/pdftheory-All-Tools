'use client';

import { BlogCategory, BLOG_CATEGORIES } from '@/config/blog';

type CategoryOption = BlogCategory | 'all';

interface CategoryFilterProps {
    selectedCategory: CategoryOption;
    onCategoryChange: (category: CategoryOption) => void;
    allLabel: string;
}

export function CategoryFilter({ selectedCategory, onCategoryChange, allLabel }: CategoryFilterProps) {
    const categories: { value: CategoryOption; label: string }[] = [
        { value: 'all', label: allLabel },
        ...Object.entries(BLOG_CATEGORIES).map(([key, value]) => ({
            value: key as BlogCategory,
            label: value.label,
        })),
    ];

    return (
        <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => (
                <button
                    key={category.value}
                    onClick={() => onCategoryChange(category.value)}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${selectedCategory === category.value
                            ? 'bg-[hsl(var(--color-primary))] text-white shadow-md'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                >
                    {category.label}
                </button>
            ))}
        </div>
    );
}
