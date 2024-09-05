'use strict';
window.onload = function () {
  // thank you: https://codepen.io/sergio_llanos22/pen/JNQRRP
  class Post {
    constructor(title, link, author, img) {
      this.title = title;
      this.link = link;
      //this.author = author;
      this.img = img;
    }
  }
  const app = new Vue({
    el: '#app',
    data: {
      keyword: '',
      postList: [
        new Post('AT&T', 'https://www.att.com/', 'kironroy', 'att.svg'),

        new Post(
          'Spectrum',
          'https://www.spectrum.net/?ReferringPartner=TWC',
          'kironroy',
          'spec.svg'
        ),

        new Post(
          'Edison',
          'https://www.sce.com/mysce/login',
          'kironroy',
          'edison.svg'
        ),

        new Post('Gas', 'https://www.socalgas.com/', 'kironroy', 'gas.svg'),

        new Post(
          'Water',
          'https://www.gswater.com/pay-your-bill',
          'kironroy',
          'water.svg'
        ),

        new Post(
          'Trash',
          'https://epay.uwscompany.com/',
          'kironroy',
          'uws.svg'
        ),
      ],
    },
    methods: {
      toggleOnOff() {
        this.onOff = !this.onOff;
      },
    },
    computed: {
      filteredList() {
        return this.postList.filter(post => {
          return post.title.toLowerCase().includes(this.keyword.toLowerCase());
        });
      },
    },
  });
};
