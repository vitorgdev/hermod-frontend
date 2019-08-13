<template>
  <nav class="navbar navbar-expand-lg mb-5">
    <div class="container">
      <a class="navbar-brand" href="#">hermod</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li
            v-for="(feature, index) in features"
            :key="index"
            class="nav-item"
          >
            <router-link
              :to="feature.route"
              class="nav-link"
              :class="index != 0 ? 'ml-5' : ''"
              href="#"
              >{{ feature.name }}</router-link
            >
          </li>
        </ul>
        <span class="navbar-text mr-4">
          Oi, Vitor!
        </span>
        <div class="dropdown">
          <a
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img
              width="39px"
              src="@/assets/vitor.png"
              class="rounded-circle avatar"
              alt="..."
            />
          </a>
          <div
            class="dropdown-menu dropdown-menu-right"
            aria-labelledby="dropdownMenuButton"
          >
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#"
              >Something else heresadasdadadasdasd</a
            >
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data: function() {
    return {
      features: [
        {
          name: "Emissão",
          route: "/emissoes"
        },
        {
          name: "Atendimento",
          route: "/atendimentos"
        },
        {
          name: "Cursos",
          route: "/cursos"
        },
        {
          name: "Usuário",
          route: "/usuarios"
        },
        {
          name: "Painel",
          route: "/painel"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
nav {
  img {
    &.avatar {
      border: 1px solid #707070;
    }
  }
  &.navbar {
    background-color: #ffc85f;
    .navbar-brand {
      font-size: 1.1rem;
      color: #707070;
      font-weight: 600;
    }
    .navbar-text {
      font-size: 10px;
      color: #707070;
    }
    ul {
      margin-left: 8rem !important;
      .nav-item {
        .nav-link {
          font-size: 0.8rem;
          color: #707070;
          &:before {
            -ms-transform: scale(0); /* IE 9 */
            -webkit-transform: scale(0); /* Safari 3-8 */
            transform: scale(0);
            transition: transform 0.2s;
            border-top: 5px solid transparent;
            display: block;
            position: relative;
            top: 35px;
            margin: 0 auto;
            width: 100%;
            content: "";
          }
          &.router-link-exact-active {
            &:before {
              -ms-transform: scale(1); /* IE 9 */
              -webkit-transform: scale(1); /* Safari 3-8 */
              transform: scale(1);
              border-top: 5px solid #58bfff !important;
            }
          }
        }
      }
    }
  }
}
</style>
