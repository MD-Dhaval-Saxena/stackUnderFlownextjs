import * as fs from 'fs';

export default async function handler(req, res) {

  let data=await fs.promises.readdir("blogdata");
  let file;
  let allBlogs=[];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    file=await fs.promises.readFile(('blogdata/' + item),'utf-8')
    // console.log(file);
    allBlogs.push(JSON.parse(file))
    
  }
    res.status(200).json(allBlogs)


  // fs.readdir("blogdata", (err, data) => {
  //   console.log(data)
  //   res.status(200).json(data)
  // })
}