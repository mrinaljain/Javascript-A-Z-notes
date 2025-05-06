class DataAnalyser {
  analyseData(jsonData) {
    console.log(`analysis hapening ${jsonData}`);
  }
}

class XMLtoJSONAdapter {
  constructor() {
    this.analyser = new DataAnalyser();
  }
  modifiedAnalyser(xmlData) {
    // but this accepts json data
    let jsonData = JSON.parse(xmlData); // ye kaam ho bhi jayeg aaur kisi ko pta nhi chalega
    this.analyser.analyseData(jsonData);
  }
}

class User {
  constructor(adapter) {
    this.adapter = adapter;
  }

  startAnalysiss(xmlData) {
    this.adapter.analyseData(xmlData);
  }
}

let rohan = new User();

rohan.analyseData("XML DATA DE RAHHU ");
