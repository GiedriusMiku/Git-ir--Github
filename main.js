function openTab(evt, tabName) {
  let tabcontents = document.querySelectorAll(".tabcontent");
  tabcontents.forEach(function(tabcontent) {
    tabcontent.style.display = "none";
  });

  let tablinks = document.querySelectorAll(".tablinks");
  tablinks.forEach(function(tablink) {
    tablink.classList.remove("active");
  });

  let currentTab = document.querySelector("#" + tabName);
  currentTab.style.display = "block";
  evt.currentTarget.classList.add("active");
}