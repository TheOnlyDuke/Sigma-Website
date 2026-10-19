import { notFound } from "next/navigation";
import { learningTopics } from "@/utils/dummydatas";

/**
 * Creates a route validator and resolver for dynamic routes restricted to predefined items.
 *
 * @param {Object} options
 * @param {Array<Object>|Object} options.items - Array or dictionary of allowed items.
 * @param {string} [options.slugKey='slug'] - The property containing the primary slug.
 * @param {Array<string>} [options.aliasKeys=['aliases', 'title', 'name', 'id']] - Additional fields to match.
 * @param {Function} [options.matcher] - Optional custom predicate (item, normalizedSlug) => boolean.
 * @returns {Object} Validator instance with resolve, validateOrNotFound, isAllowed, and getAllowedSlugs.
 */

export function createRouteValidator({
  items = [],
  slugKey = "slug",
  aliasKeys = ["aliases", "title", "name", "id", "titleEn"],
  matcher,
}) {
  const itemList = Array.isArray(items) ? items : Object.values(items);

  const normalize = (val) => {
    if (val === undefined || val === null) return "";
    try {
      return decodeURIComponent(String(val)).trim().toLowerCase();
    } catch {
      return String(val).trim().toLowerCase();
    }
  };

  const resolve = (rawSlug) => {
    if (!rawSlug) return null;
    const target = normalize(rawSlug);
    if (!target) return null;

    if (typeof matcher === "function") {
      return itemList.find((item) => matcher(item, target)) || null;
    }

    return (
      itemList.find((item) => {
        if (normalize(item[slugKey]) === target) return true;

        if (normalize(item.id) === target) return true;

        for (const key of aliasKeys) {
          const val = item[key];
          if (Array.isArray(val)) {
            if (val.some((v) => normalize(v) === target)) return true;
          } else if (val && normalize(val) === target) {
            return true;
          }
        }
        return false;
      }) || null
    );
  };

  const validateOrNotFound = (rawSlug) => {
    const resolved = resolve(rawSlug);
    if (!resolved) {
      notFound();
    }
    return resolved;
  };

  const isAllowed = (rawSlug) => Boolean(resolve(rawSlug));

  const getAllowedSlugs = () =>
    itemList.map((item) => item[slugKey] || item.id || item.title);

  return {
    resolve,
    validateOrNotFound,
    isAllowed,
    getAllowedSlugs,
  };
}


export const topicRouteValidator = createRouteValidator({
  items: Object.values(learningTopics || {}),
  slugKey: "slug",
  aliasKeys: ["aliases", "title", "titleEn", "name", "id"],
});


export const blogRouteValidator = createRouteValidator({
  items: [],
  slugKey: "slug",
  aliasKeys: ["aliases", "title", "id"],
});
