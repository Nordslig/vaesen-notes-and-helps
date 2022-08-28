const cDate = new Date();
const cDay = cDate.getDate();
const cMonth = cDate.getMonth() + 1;
const cYear = cDate.getFullYear();

const noteDate = `${cDay}:${cMonth}:${cYear}`;

const keywordsArr = [];

const downloadToFile = (content, filename, contentType) => {
  const a = document.createElement("a");
  const file = new Blob([content], { type: contentType });

  // a.href = URL.createObjectURL(file);
  // a.download = filename;
  // a.click();

  // URL.revokeObjectURL(a.href);
  showNotes(file);
};

const reader = new FileReader();

const showNotes = (file) => {
  reader.readAsArrayBuffer(file);
  document.querySelector("p").textContent = file.text();
};

document.querySelector(".btnSave").addEventListener("click", () => {
  console.log(keywordsArr);
  const textArea = document.querySelector("textarea");

  // downloadToFile(textArea.value, `notatka${noteDate}.txt`, "text/plain");
});

document.querySelector(".btnAdd").addEventListener("click", () => {
  const keyword = document.querySelector("input.keywords");

  keywordCheck(keyword.value);
});

const keywordCheck = (keyword) => {
  let string = keyword;
  string = string.replace(/\s/g, "");
  string = string.toLowerCase();
  console.log(string);

  if (keywordsArr.length === 0) {
    keywordsArr.unshift(string);
  } else {
    const retValue = keywordsArr.findIndex((el) => el === string);

    console.log(retValue);
    if (retValue === -1) {
      keywordsArr.unshift(string);
    } else {
      alert("To słowo kluczowe już istnieje");
    }
  }
};
