<template>
  <div>
    <!-- <span style="display: inline-block" class="icon_done"></span> -->
    <b-card style="font-family: Meiryo; background-color: #eeffff"
      >カード申込画面</b-card
    >
    <table style="margin: auto; width: 50%; width: 20%; margin-top: 10px">
      <tr>
        <th>氏名(漢字)</th>
      </tr>

      <tr>
        <td>
          <div style="display: flex">
            <b-form-input
              type="text"
              class="border_fix"
              v-model="customerName"
            ></b-form-input>
            <span
              class="icon_done"
              v-if="customerName.match(/^[\u4E00-\u9FFF]+$/)"
            ></span>
          </div>
        </td>
      </tr>
      <tr>
        <th>メールアドレス</th>
      </tr>
      <tr>
        <td>
          <div style="display: flex">
            <b-form-input
              type="email"
              class="border_fix"
              v-model="mail"
            ></b-form-input>
            <span class="icon_done" v-if="mail.length > 0"></span>
          </div>
        </td>
      </tr>
      <tr>
        <th>住所</th>
      </tr>
      <tr>
        <td>
          <div style="display: flex">
            <b-form-input
              type="text"
              class="border_fix"
              v-model="address"
            ></b-form-input>
            <span class="icon_done" v-if="address.length > 0"></span>
          </div>
        </td>
      </tr>
      <tr>
        <th>生年月日</th>
      </tr>
      <tr>
        <td>
          <div style="display: flex">
            <b-form-input
              type="text"
              v-model="birthday"
              class="border_fix"
            ></b-form-input>
            <v-menu>
              <template v-slot:activator="{ on, attrs }">
                <v-icon v-on="on" v-bind="attrs">{{
                  mdi_Calendar_Blank_Out_Line
                }}</v-icon>
              </template>
              <v-row @click="registBirthday()" justify="center">
                <v-date-picker
                  v-model="date"
                  class="mt-4"
                  min="2016-06-15"
                  max="2025-03-20"
                ></v-date-picker>
              </v-row>
            </v-menu>
            <span class="icon_done" v-if="birthday.length === 11"></span>
          </div>
        </td>
      </tr>
      <tr>
        <th>口座番号</th>
      </tr>
      <tr>
        <td>
          <div style="display: flex">
            <b-form-input
              type="text"
              class="border_fix"
              v-model="accountNumber"
            ></b-form-input>
            <span class="icon_done" v-if="accountNumber.length === 7"></span>
          </div>
        </td>
      </tr>
      <tr>
        <th>銀行コード</th>
      </tr>
      <tr>
        <td>
          <div style="display: flex">
            <b-form-input
              type="text"
              class="border_fix"
              v-model="bankCode"
            ></b-form-input>
            <span class="icon_done" v-if="bankCode.length === 4"></span>
          </div>
        </td>
      </tr>
      <tr>
        <th>支店コード</th>
      </tr>
      <tr>
        <td>
          <div style="display: flex">
            <b-form-input
              type="text"
              class="border_fix"
              v-model="branchCode"
            ></b-form-input>
            <span class="icon_done" v-if="branchCode.length === 3"></span>
          </div>
        </td>
      </tr>
    </table>
    <div style="margin-top: 10px; text-align: center">
      <b-button variant="outline-primary" @click="backToTop"
        >back to top</b-button
      >
    </div>
  </div>
</template>

<script>
import { mdiCalendarBlankOutline } from "@mdi/js";
export default {
  data() {
    return {
      name: "ApplyCard",
      customerName: "",
      mail: "",
      address: "",
      birthday: "",
      accountNumber: "",
      bankCode: "",
      branchCode: "",
      msg: "",
      mdi_Calendar_Blank_Out_Line: mdiCalendarBlankOutline,
      date: "",
    };
  },
  methods: {
    backToTop() {
      this.$router.push({
        name: "top",
      });
    },
    registBirthday() {
      // console.log(typeof this.date);

      let selectedDate = this.date;
      for (let i = 0; i <= 2; i++) {
        if (i === 0) {
          selectedDate = selectedDate.replace("-", "年");
        } else if (i === 1) {
          selectedDate = selectedDate.replace("-", "月");
        } else if (i === 2) {
          selectedDate = selectedDate + "日";
        }
      }
      console.log(selectedDate);
      this.birthday = selectedDate;
    },
  },
};
</script>

<style>
.icon_done {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: solid 2px red;
  margin: 5px;
}

.border_fix {
  border-style: inset;
}
/* .btn {
  color: #fff;
  background: #f56500;
  border-radius: 100vh;
  border-style: none;
  padding: 5px;
} */
</style>
