class Github {
 constructor(){
   this.client_id = 'cd7432dc50e4bc4b7dc3';
   this.client_secret = 'f573dd6d76dea7dc38ca63948931fd6c12409ac6';
   this.repos_count = 5;
   this.repos_sort = 'created: asc';
 }

 async getUser(user){

  const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

  const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

  const profile = await profileResponse.json();
  const repos = await repoResponse.json();

  return {
     profile,
     repos
   }
  };
};