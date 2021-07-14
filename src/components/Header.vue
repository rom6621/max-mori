<template>
  <v-container fluid>
    <div class="header">
      <h1>最大瞬間盛数</h1>
      <div class="icon chart">
        <i></i>
        <i></i>
        <i></i>
      </div>
    </div>
  </v-container>    
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.vcontainer {
  position: relative;
  max-width: 100%;
  padding: 0;
}

.header {
  background-color: rgb(202, 115, 99);
  width: 100%;
  min-height: 70vh;
  position: relative;
}

h1 {
  /* text-align: center;  */
  color: white;
  position: absolute;
  top: 54%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.grey {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 5px;
  row-gap: 70px;
}
.row_content {
  max-width: 100%;
  padding: 0px;
}

h2 {
  padding-bottom: 15px;
  padding-top: 15px;
  display: block;
  text-align: center;
}

h4 {
  padding-bottom: 15px;
  padding-top: 15px;
  display: block;
  text-align: center;
}

/* グラフのアニメーション */
.chart {
  position: absolute;
  top: 74%;
  left: 50%;
  width: 16em;
  height: 16em;
  transform: translate(-50%, -50%);
}
.chart {
  color: #12395f;
}
.chart::before,
.chart::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: 0.25em;
  height: 8.125em;
  margin: 0 0 0 -3.25em;
  transform: translate(-50%, -50%);
  background-color: currentColor;
  border-radius: 0.125em;
}
.chart::after {
  width: 8.125em;
  height: 0.25em;
  margin: 3.125em 0 0 -0.125em;
}
.chart i {
  position: absolute;
  bottom: 4.75em;
  left: 9em;
  box-sizing: border-box;
  display: block;
  width: 1.875em;
  height: 0;
  background-color: #f69d88;
  box-shadow: inset 0 0 0 0.25em currentColor;
}
.chart i:first-child {
  animation: chart1 0.999s infinite linear;
}
.chart i:nth-child(2) {
  background-color: #ffdea3;
  animation: chart2 0.999s 0.333s infinite linear;
}
.chart i:last-child {
  background-color: #85c996;
  animation: chart3 0.999s 0.666s infinite linear;
}

.no1_ranking {
  color: #d32f2f;
  font-size: 35px;
  /*margin-bottom: 10px;*/
}

.no1_text {
  font-size: 35px;
}

.no2_ranking {
  color: #d32f2f;
  font-size: 35px;
  /*margin-bottom: 10px;*/
}

.no2_text {
  font-size: 35px;
}

.no3_ranking {
  color: #d32f2f;
  font-size: 35px;
  /*margin-bottom: 10px;*/
}

.no3_text {
  font-size: 35px;
}

.ranking_sport {
  border-bottom: solid 2px #555;
}

.point {
  float: right;
  font-size: 35px;
  /*margin-bottom: 7px;*/
}

.another_sport {
  font-size: 25px;
  float: left;
}

.point2 {
  float: right;
  font-size: 25px;
}

.another_sport_rank {
  margin-bottom: 10px;
  font-size: 25px;
}

.reload {
  margin-bottom: 10px;
}

.small_title {
  position: relative;
  text-align: center;
}

.bar_title {
  color: black;
  display: block;
  text-align: center;
}

@keyframes chart1 {
  0% {
    height: 0;
  }
  10% {
    height: 5.625em;
  }
  70% {
    width: 1.875em;
    transform: translateX(-4.375em);
  }
  99% {
    width: 0;
    height: 5.625em;
    transform: translateX(-4.375em);
  }
  99.1% {
    height: 0;
    transform: translateX(0em);
  }
  100% {
    height: 0;
  }
}

@keyframes chart2 {
  0% {
    height: 0;
  }
  10% {
    height: 2.375em;
  }
  70% {
    width: 1.875em;
    transform: translateX(-4.375em);
  }
  99% {
    width: 0;
    height: 2.375em;
    transform: translateX(-4.375em);
  }
  99.1% {
    height: 0;
    transform: translateX(0em);
  }
  100% {
    height: 0;
  }
}
@keyframes chart3 {
  0% {
    height: 0;
  }
  10% {
    height: 3.5625em;
  }
  70% {
    width: 1.875em;
    transform: translateX(-4.375em);
  }
  99% {
    width: 0;
    height: 3.5625em;
    transform: translateX(-4.375em);
  }
  99.1% {
    height: 0;
    transform: translateX(0em);
  }
  100% {
    height: 0;
  }
}
</style>