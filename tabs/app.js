const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');
const btns = document.querySelectorAll('.tab-btn');


about.addEventListener('click', (e) => {
  const id = e.target.dataset.id;
  if(id){
    // remove active from all btns
    btns.forEach(btn => {
      btn.classList.remove('active');
      e.target.classList.add('active');
    });
    //hide other articles
    articles.forEach(article => {
      article.classList.remove('active');
    });

    const displayArticle = document.getElementById(id);
    displayArticle.classList.add('active');
  }
});