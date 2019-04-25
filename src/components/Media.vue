<template>
  <div class='media row'>
    <div class='media-img col-sm-12 col-md-3'>
      <img v-bind:src='img'>
    </div>
    <div class='media-content col-sm-12 col-md-6'>
      <h4>{{ title }}</h4>
      <p>{{ description }}</p>
      <span class='media-date'>
        <font-awesome-icon icon='clock'/>
        {{ date }}
      </span>
    </div>
    <div class='media-person col-sm-12 col-md-3'>
      <img v-bind:src='avatar'>
      <div class='media-person-box'>
        <p>
          <a href='#'>{{ name }}</a>
        </p>
        <p>{{ position }}</p>
        <p>
          <font-awesome-icon icon='map-marker-alt'/>
          {{ city }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: [
    'title',
    'description',
    'img',
    'date',
    'avatar',
    'name',
    'position',
    'city'
  ],
  data () {
    return { }
  }
}
</script>

<style scoped>
.media {
  padding: 15px;
  -webkit-box-shadow: 3px 3px 5px 0px rgba(204, 204, 204, 1);
  -moz-box-shadow: 3px 3px 5px 0px rgba(204, 204, 204, 1);
  box-shadow: 3px 3px 5px 0px rgba(204, 204, 204, 1);
  margin-bottom: 1rem;
  border-radius: 3px;
}

.media:hover {
  background: #f7f7f7;
}

.media-date {
  color: #999;
}

.media-person {
  display: flex;
  justify-content: center;
  border-left: 1px solid #ccc;
  flex-direction: column;
}

.media-person img {
  align-self: center;
  border-radius: 50%;
}

.media-person p {
  text-align: center;
  margin-bottom: 0.5rem;
}

@media (max-width: 767.98px) {
  .media-img {
    display: flex;
    justify-content: center;
  }

  .media-content {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .media-person {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    border-top: 1px solid #ccc;
    border-left: none;
    padding-top: 1rem;
  }

  .media-person p {
    text-align: left;
  }

  .media-person-box {
    padding-left: 1rem;
  }
}
</style>
