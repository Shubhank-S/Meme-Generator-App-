const getAllMemes= async()=>{
  const reponse = await fetch('https://api.imgflip.com/get_memes')
  return await reponse.json();
}

export default getAllMemes;