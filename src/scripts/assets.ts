export function getImgUrl(url: string) {
  return new URL(`${url}`, import.meta.url).href;
}

import fileInfo from "@/assets/publicImage.json";

/**
 * 이미지 동적 로드
 * @returns
 */
function getResource() {
  type AssetFileKey = keyof typeof fileInfo.files;
  const fileMap: { [key in AssetFileKey]?: any } = {};

  const { assetsBasePath, files } = fileInfo;
  const basePath = assetsBasePath.replace("public/", "").replace("src/", "");

  const keys: AssetFileKey[] = Object.keys(files) as AssetFileKey[];

  keys.map((fileName: AssetFileKey) => {
    const href = `/${basePath}/${files[fileName]}`;

    fileMap[fileName] = new URL(href, import.meta.url).href;
  });
  return fileMap;
}

export const assets = getResource();
