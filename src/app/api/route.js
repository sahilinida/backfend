

const { NextResponse,NextRequest:req } = require("next/server");

let ob=[

    {id:1,name:"sahil ",age:21,add:'khamriya sujat harraiya basti'},
    {id:2,name:"sa ",age:21,add:'khamriya sujat harraiya basti'},
    {id:3,name:"sahul ",age:21,add:'khamriya sujat harraiya basti'},
    {id:4,name:"rahul ",age:21,add:'khamriya sujat harraiya basti'},
    {id:5,name:"videk ",age:21,add:'khamriya sujat harraiya basti'},
    {id:6,name:"vinod ",age:21,add:'khamriya sujat harraiya basti'},
    {id:7,name:"pritam ",age:21,add:'khamriya sujat harraiya basti'},
]


   export function GET(){
    return NextResponse.json(ob)
}

export function POST(req){
    


        
    return NextResponse.json(ob)
}