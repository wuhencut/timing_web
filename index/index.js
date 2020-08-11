new Vue({
  el: ".page",
  data() {
    return {
      computeNumber: "",
      timer: null,
      timeTemp: 1596988800000, // 2020-8-10 00:00:00时间戳，每24小时添加2900kg
    }
  },
  mounted() {
    this.computeNumber = ["6", "0", "0", "8"];
    setTimeout(() => {
      this.increaseNumber();
    }, 1000);
  },
  methods: {
    // 定时增长数字
    increaseNumber() {
      if (Array.isArray(this.computeNumber)) {
        this.computeNumber = this.computeNumber.join("")
      }
      let now = new Date().getTime(),
      day = 24 * 60 * 60 * 1000;
      if((now - this.timeTemp) % day >= 1){
        // 为了不显得数字0特别多导致很假，选择 2918作为大概数字
        this.computeNumber = this.computeNumber - 0 + 2918 + "";
        this.computeNumber = this.computeNumber.split("");
        this.setNumberTransform();
      }
    },
    // 设置每一位数字的偏移
    setNumberTransform() {
      let numberItems = this.$refs.numberItem;
      for (let index = 0; index < this.computeNumber.length; index++) {
        let elem = numberItems[index];
        elem.style.transform = "translate(-50%, -" + this.computeNumber[index] * 10 + "%)"
      }
      localStorage.setItem("tm_num", JSON.stringify(this.computeNumber));
    }
  },

})