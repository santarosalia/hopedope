const {addComment,checkComment,updateComment,delComment,allComment} = require('./notion');

const command = async (command,name,comment,pw)=>{
    switch (command){
        case 1 : addComment(name,comment,pw).then();
    }
}

export {command};