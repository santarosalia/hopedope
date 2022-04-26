
const { Client } = require("@notionhq/client");

const notion = new Client({ auth: 'secret_SSm0GTsFvR3oeHvxj7ODvHYIoXNRk7Sd6cO0MsMMVs9' });
const databaseId = '8195f0adae7846648cb263d59b1c222b';

const addComment = async (name,comment,pw)  => {
    try {
        await notion.pages.create({
            
            parent : {database_id : databaseId},
            properties : {
                title : {
                    
                    title: [
                        {   
                            text:{
                            content : name
                        }


                    }

                    ]
                }
                // ,
                // "comment" : {
                //     rich_text : [
                //         {
                //             text :{
                //                 content : comment
                //             }
                //         }
                //     ]
                // },
                // "pw" : {
                //     rich_text : [
                //         {
                //             text :{
                //                 content : pw
                //             }
                //         }
                //     ]
                // },
                // "timestamp" : {

                //     rich_text : [
                //         {
                //             text :{
                //                 content : new Date().getTime()
                //             }
                //         }
                //     ]
                // }
            }     
        }
        )
    } catch (e) {
        console.log(e)
    }
}



const checkComment = async (timestamp,pw)  => {
    try {
        const items = await notion.databases.query({
            database_id: process.env.NOTION_DATABASE_ID,
            filter : {
                and : [
                    {
                        property : "timestamp",
                        rich_text : {
                            equals : timestamp
                            }
                    },
                    {
                        property : "pw",
                        rich_text : {
                            equals : pw
                        }
                    }
                    
                    
                ]
                
                
                
            }

        })
        return items.results.length;
    } catch (e) {
        console.log(e);
    }
}
const updateComment = async(pageId,comment)=>{
    try{
        const items = await notion.pages.update({
            page_id : pageId,
            properties : {
                "comment" : {
                    rich_text : [
                        {
                            text : comment
                        }
                    ]
                }
            }
        });
        
        
        const result = items.results.length;
        
        return result;
    }catch(e){
        console.log(e);
    }
}

const delComment = async(pageId)=>{
    const items = notion.pages.update({
        page_id : pageId,
        archived : true
    });
    const result = items.results.length;
    
    return result;
}
const allComment = async()=>{
    const items = await notion.databases.query({
        database_id : databaseId
    })
    return items;
    
}

export {addComment,checkComment,updateComment,delComment,allComment};


// chatId : properties.chatId.title[0].text.content,
//                 market : properties.market.rich_text[0].text.content