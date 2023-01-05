import Getdataarray from "./getdata";


function Todict(props){
    const code_dict = []
    const code_list = Getdataarray(props);

    for(var i = 0; i<code_list[0].length; i++){
        code_dict.push({})
        code_dict[i]["Course_Name"] = code_list[0][i]
        code_dict[i]["Course_Code"] = code_list[1][i]
        code_dict[i]["Course_Credit"] = code_list[2][i]
    }

    

    return code_dict
}


export default Todict


