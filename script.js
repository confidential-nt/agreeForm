const allChecker = document.querySelector("#all-check");
const checkboxes = document.querySelectorAll("[type=checkbox]");

const targetCheckBoxContainer = document.querySelector(".checkbox-container");
const targetCheckboxes = targetCheckBoxContainer.querySelectorAll(
  "[type=checkbox]"
);

function confirmingCheck() {
  const essentialChecker = document.querySelectorAll("[data-state=essential]");
  const submitBtn = document.querySelector("[type=submit]");

  const condition = [...essentialChecker].every((box) => box.checked);

  if (condition) {
    submitBtn.removeAttribute("disabled");
    return;
  }

  submitBtn.setAttribute("disabled", "");
}

function loopingForAllCheck() {
  targetCheckboxes.forEach((checkbox) => {
    if (allChecker.checked) {
      checkbox.checked = true;
      return;
    }

    checkbox.checked = false;
  });
}

function matchmakingCheck(e) {
  const {
    target: {
      dataset: { state },
    },
  } = e;

  if (state === "all") loopingForAllCheck();

  confirmingCheck();
}

function setEventListener() {
  checkboxes.forEach((box) => box.addEventListener("click", matchmakingCheck));
}

function main() {
  setEventListener();
}

main();
