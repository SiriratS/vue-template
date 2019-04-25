<template>
  <div class='container'>
    <div class='row'>
      <div class='col-12'>
        <h1>BridgeAsia Forums</h1>
        <h2>Subtitle</h2>
        <h3>Posts</h3>
      </div>
    </div>
    <div class='row'>
      <media
        class='col-12'
        v-for='item in items'
        v-bind:key='item.id'
        v-bind:title='item.title'
        v-bind:description='item.description'
        v-bind:img='item.img'
        v-bind:date='item.date'
        v-bind:avatar='item.avatar'
        v-bind:name='item.name'
        v-bind:position='item.position'
        v-bind:city='item.city'
      ></media>
      <div class='col-12'>
        <b-pagination
          class='justify-content-center'
          v-model='currentPage'
          :total-rows='rows'
          :per-page='perPage'
          aria-controls='my-table'
        ></b-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      perPage: 3,
      currentPage: 1,
      items: [
        {
          id: 1,
          title: 'Hello World',
          description:
            'Lorem Ipsum is also known as: Greeked text, blind text, placeholder text, dummy content, filler text, lipsum, and mock-content.',
          img: 'https://via.placeholder.com/150',
          date: 'May 1, 2019',
          avatar: 'https://via.placeholder.com/100',
          name: 'Sirirat Saemak',
          position: 'Develop',
          city: 'Bangkok'
        },
        {
          id: 2,
          title: 'Hello World',
          description:
            'Lorem Ipsum is also known as: Greeked text, blind text, placeholder text, dummy content, filler text, lipsum, and mock-content.',
          img: 'https://via.placeholder.com/150',
          date: 'May 1, 2019',
          avatar: 'https://via.placeholder.com/100',
          name: 'Sirirat Saemak',
          position: 'Develop',
          city: 'Bangkok'
        },
        {
          id: 3,
          title: 'Hello World',
          description:
            'Lorem Ipsum is also known as: Greeked text, blind text, placeholder text, dummy content, filler text, lipsum, and mock-content.',
          img: 'https://via.placeholder.com/150',
          date: 'May 1, 2019',
          avatar: 'https://via.placeholder.com/100',
          name: 'Sirirat Saemak',
          position: 'Develop',
          city: 'Bangkok'
        }
      ]
    }
  },
  computed: {
    rows () {
      return this.items.length
    }
  }
}
</script>
