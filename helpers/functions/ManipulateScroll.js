// This will be used to manipulate the vertical scrolling when under certain conditions

export default function ManipulateScroll() {
  if (
    sessionStorage.getItem("Menu Opened.") ||
    sessionStorage.getItem("Search Opened.")
  ) {
    document.body.style.overflowY = "hidden";
  }

  if (
    !sessionStorage.getItem("Menu Opened.") &&
    !sessionStorage.getItem("Search Opened.")
  ) {
    document.body.style.overflowY = "auto";
  }
}
