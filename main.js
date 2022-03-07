const linksSocialMedia = {
    github: 'jravolio',
    twitter: 'jravolio12',
    facebook: 'juliocesar.junior.90',
    instagram: 'jravolio',
    youtube: 'jravolio'
   }
   
   function changeSocialMediaLinks(){
    for (let li of socialLinks.children){
      const social = li.getAttribute('class')
      li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}` // Busca no objeto linksSocialMedia pelo "filtro" da variável social
    }
  }

   changeSocialMediaLinks()

   function getGithubProfileInfos(){
       const url = `https://api.github.com/users/${linksSocialMedia.github}` // Vai até linksSocialMedia e busca o "filho" github

       fetch(url).then(response => response.json()) //fetch busca o arquivo e armazena
       .then(data => {
         userName.textContent = data.name
         userBio.textContent = data.bio
         userLink.href = data.html_url
         userImage.src = data.avatar_url
         userLogin.textContent = data.login
       })
    }
    getGithubProfileInfos()