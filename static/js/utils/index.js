export function setDocumentTitle(title) {
  document.title = `${title} | OQA`
}

export function getStorageUserKey() {
  return 'oqa_token'
}

export function getLocalStorageObject(key = getStorageUserKey()) {
  return localStorage.getItem(key)
}
