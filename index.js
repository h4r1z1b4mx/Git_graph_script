const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');
const random = require('random');

const FILE_PATH= './data.json';

const makeCommit = (n) => {

     if(n === 0){
        return simpleGit().push();
     }

     const x = Math.floor(Math.random() * 55); // 0–54
     const y = Math.floor(Math.random() * 7);  // 0–6
    const DATE = moment().subtract(1,'y').add(1,'d').add(x,'w').add(y,'d').format();

    const data = {
        date:DATE
    }
    console.log(DATE);
    jsonfile.writeFile(FILE_PATH, data,()=> {
        simpleGit().add([FILE_PATH]).commit(DATE,{'--date':DATE},makeCommit.bind(this,--n));
    });
}


// git commit --date=""

makeCommit(1000);