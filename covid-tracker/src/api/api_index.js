
export async function getCurData(){
    const res = await fetch('https://api.covidtracking.com/v1/us/current.json');
    const data = await res.json();
    return data;
}

export async function getSelectedName(name){

    console.log('api_name',name);
    if(name!==""){
        const res = await fetch(`https://api.covidtracking.com/v1/states/${name}/daily.json`);
        const data = await res.json();
        return data;
    }
    return;
}