<template>
  <div>
    <div class="row">
      <div class="col-md-12" v-for="(curse, index) in curses" :key="index">
        <Card :identifier="curse.id">
          <template slot="title">
            {{ curse.name }}
          </template>
          <template slot="text">
            <div class="row">
              <div class="col-md-4 circle">
                <div class="row">
                  <div class="col-md-12 d-flex justify-content-center mb-3">
                    <svg height="180" width="180">
                      <defs>
                        <filter
                          id="f3"
                          x="-20%"
                          y="-20%"
                          width="200%"
                          height="200%"
                        >
                          <feOffset
                            result="offOut"
                            in="SourceGraphic"
                            dx="0"
                            dy="0"
                          />
                          <feGaussianBlur
                            result="blurOut"
                            in="offOut"
                            stdDeviation="3"
                          />
                          <feBlend
                            in="SourceGraphic"
                            in2="blurOut"
                            mode="normal"
                          />
                        </filter>
                      </defs>
                      <circle
                        class="shadow-orange"
                        cx="90"
                        cy="90"
                        r="75"
                        stroke="#FFC85F"
                        stroke-width="10"
                        fill="transparent"
                        filter="url(#f3)"
                      />
                      <text
                        x="50%"
                        y="52%"
                        text-anchor="middle"
                        fill="#707070"
                        dy=".1em"
                        font-size="22"
                        font-weight="bold"
                      >
                        Chamar
                      </text>
                    </svg>
                  </div>
                  <div class="col-md-12  d-flex justify-content-center">
                    <button class="btn btn-danger btn-sm">
                      Não Compareceu
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-md-4 circle">
                <div class="row">
                  <div class="col-md-6">
                    <div class="row">
                      <div class="yellow-card next-call col-md-12 ml-3">
                        <span>ADS 0004</span>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12 ml-3 mt-4 info">
                        <span>Atendidas hoje</span>
                        <div class="clearfix"></div>
                        <span class="value">1</span>
                        <div class="clearfix mt-3"></div>
                        <span>Total na Fila</span>
                        <div class="clearfix"></div>
                        <span class="value">12</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-1"></div>
                  <div class="col-md-4">
                    <div class="row">
                      <div
                        class="col-md-12 custom-control float-right custom-checkbox"
                      >
                        <div class="float-right">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="customCheck1"
                          />
                          <label
                            class="custom-control-label"
                            for="customCheck1"
                          ></label>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="yellow-card mt-5">
                          <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                              ENF 1200
                            </li>
                            <li class="list-group-item">
                              ENF 1200
                            </li>
                            <li class="list-group-item">
                              ENF 1200
                            </li>
                            <li class="list-group-item">
                              ENF 1200
                            </li>
                            <li class="list-group-item">
                              ENF 1200
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4 circle">
                <div class="row">
                  <div class="col-md-12">
                    <div class="text-center empty">Disponibilidade</div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="text-center empty">
                      <button style="width:60%" class="btn btn-danger">
                        Pausar
                      </button>
                      <button style="width:60%" class="btn btn-purple">
                        Encerrar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>
<script>
import Card from "@/components/ui/Card.vue";
export default {
  components: { Card },
  data: function() {
    return {
      curses: [
        { name: "ADS", id: 1 },
        { name: "Sistemas de Informação", id: 2 },
        { name: "Nutrição", id: 3 },
        { name: "Enfermagem", id: 4 },
        { name: "Medicina", id: 5 }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.circle {
  border-right: 1px solid rgba(0, 0, 0, 0.2);
}
.info {
  text-align: center;
  font-size: 14px;
  color: #707070;
  .value {
    font-weight: 1000;
    font-size: 20px;
  }
}
.empty {
  font-size: 20px;
  color: #707070;
}
svg {
  cursor: pointer;
}
label {
  &:before {
    border-radius: 8px !important;
    height: 28px;
    width: 28px;
  }
  &:after {
    width: 28px;
    height: 28px;
  }
}
.yellow-card {
  .list-group-item {
    font-size: 10px;
    padding: 0;
    border: 0;
    margin-bottom: 5px;
  }
  border: 1px solid #ffc85f;
  border-radius: 9px;
  color: #707070;
  font-weight: 500;
  font-size: 14px;
  box-shadow: 0px 3px 6px rgba(136, 136, 136, 0.5);
  padding: 9px;
  &.next-call {
    font-weight: 1000;
    padding: 20px;
    font-size: 22px;
    span {
      text-align: center;
    }
    &:before {
      content: "Pr\F3xima senha";
      z-index: 9999;
      position: absolute;
      margin-left: -2px;
      top: -16px;
      font-weight: normal;
      font-size: 20px;
    }
    &:after {
      content: "";
      height: 1px;
      background-color: WHITE;
      width: 139px;
      margin-left: -110px;
      z-index: 999;
      position: absolute;
      top: -1px;
    }
  }
}
button {
  &.btn {
    &.btn-danger {
      background: #ff6565;
      border-radius: 27px;
      border: 1px solid;
      padding: 4px 34px;
      font-size: 20px;
    }
  }
}
</style>
