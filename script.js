const hamburger = document.querySelector('.hamburger');
const exitMenu = document.querySelector('.exit-menu');
const navbar = document.querySelector('.nav-link-container');
const links = document.querySelectorAll('.nav-link');

// Set up the menu                                                  SET UP THE MENU

hamburger.addEventListener('click', () => {
  navbar.classList.add('active-menu');
});

exitMenu.addEventListener('click', () => {
  navbar.classList.remove('active-menu');
});

links.forEach((elm) => {
  elm.addEventListener('click', () => {
    navbar.classList.remove('active-menu');
  });
});

// Chefs

const topChefs = [
  {
    image: './Assets/chef1.jfif',
    name: 'Salim ghannami',
    achievement: 'Wins “Chef Pioneer” Award.',
    info: 'He is the host of AMC Networks “cooking series Cocina Marroquí”.',
  },
  {
    image: './Assets/chef2.jfif',
    name: 'Chef Muha',
    achievement: 'Owner of Moha Big Resto.',
    info: 'He was presenting Master chef show, and Guiding new generations.',
  },
  {
    image: './Assets/chef3.jfif',
    name: 'Ahmed Bassam',
    achievement: 'Wins “Chef Pioneer” Award.',
    info: 'He is the host of AMC Networks “cooking series Cocina Marroquí”.',
  },
  {
    image: './Assets/chef4.jfif',
    name: 'Meryam Tahiri',
    achievement: 'Owner of Riyad Rabat.',
    info: 'She was presenting Master chef show, and Guiding new generations.',
  },
  {
    image: './Assets/chef5.jfif',
    name: 'Adham Echcharkaoui',
    achievement: 'Wins “Chef Pioneer” Award.',
    info: 'He is the host of AMC Networks “cooking series Cocina Marroquí”.',
  },
  {
    image: './Assets/chef6.jfif',
    name: 'Fadoua Rahimi',
    achievement: 'Owner of Moha Big Resto.',
    info: 'She was presenting Master chef show, and Guiding new generations.',
  },
];

const chefs = document.querySelector('.chefs');

for (let i = 0; i <= topChefs.length; i += 1) {
  const chef = document.createElement('div');
  chef.innerHTML = `
    
          <div class="image-container">
            <img src="${topChefs[i].image}" alt="Chef Image" />
          </div>
          <div class="chef-info">
            <p class="chef-name">${topChefs[i].name}</p>
            <p class="chef-title">
            ${topChefs[i].achievement}
            </p>
            <hr />
            <p class="more-info">
            ${topChefs[i].info}
            </p>
          </div>
    
    `;
  chef.classList.add('chef');
  chefs.appendChild(chef);
  if (i >= 2) {
    chef.classList.add('delete-chef');
  }
}