// TODO: import module bila dibutuhkan di sini

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const dtPotong = (parsedData) => {
  if (parsedData.message !== undefined) {
    splitData = parsedData.message.split(" ");
    const lastWord = splitData;
    return lastWord[lastWord.length - 1];
  }
  if (parsedData[0].message !== undefined) {
    splitData = parsedData[0].message.split(" ");
    const lastWord = splitData;
    return lastWord[lastWord.length - 1];
  }
  if (parsedData[0].data.message !== undefined) {
    splitData = parsedData[0].data.message.split(" ");
    const lastWord = splitData;
    return lastWord[lastWord.length - 1];
  }
};
let newData = [];
const bacaData = (fnCallback) => {
  fs.readFile(file1, (err, data) => {
    if (err) {
      fnCallback(err);
      return;
    }
    const parsedData = JSON.parse(data);
    const dtPotongan = dtPotong(parsedData);
    pushData(dtPotongan);
    fs.readFile(file2, (err, data) => {
      if (err) {
        fnCallback(err);
        return;
      }
      const parsedData = JSON.parse(data);
      const dtPotongan = dtPotong(parsedData);
      pushData(dtPotongan);
      fs.readFile(file3, (err, data) => {
        if (err) {
          fnCallback(err);
          return;
        }
        const parsedData = JSON.parse(data);
        const dtPotongan = dtPotong(parsedData);
        pushData(dtPotongan);
        fnCallback(
          null,
          newData.filter((e, i, s) => {
            return s.indexOf(e) === i;
          })
        );
      });
    });
  });
};
pushData = (data) => {
  newData.push(data);
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
