<template>
  <div>
    <v-sheet
      tile
      height="6vh"
      color="grey lighten-3"
      class="d-flex align-center"
    >
      <v-btn icon @click="$refs.calendar.prev()">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-btn icon @click="$refs.calendar.next()">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-sheet>
    <v-sheet height="94vh">
      <v-calendar
        ref="calendar"
        :events="events"
        :event-color="getEventColor"
        @change="getEvents"
      ></v-calendar>
    </v-sheet>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data: () => ({
    events: [],
    value: moment().format("yyyy-MM-DD"),
  }),
  computed: {
    title() {
      return moment(this.value).format("yyyy年 M月"); // 表示用文字列を返す
    },
  },
  methods: {
    getEvents() {
      const events = [
        {
          name: "会議",
          start: new Date("2020-08-03T01:00:00"), // 開始時刻
          end: new Date("2020-08-03T02:00:00"), // 終了時刻
          color: "blue",
          timed: true, // 終日ならfalse
        },
      ];
      this.events = events;
    },
    getEventColor(event) {
      return event.color;
    },
  },
};
</script>
