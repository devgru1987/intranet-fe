
// resolved URL of static gallery images
export function getImageUrl(name) {
    return new URL(`../../assets/images-user/${name}.png`, import.meta.url).href
}
