var posts=["2023/12/19/准费米能级与大注入效应/","2024/06/06/练字/","2024/04/12/定时器学习/","2024/04/11/Qsolution/","2024/04/12/博客搭建记录/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };