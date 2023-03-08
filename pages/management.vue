<template>
  <div class="container">
    <div>
      <h3>จัดการรถ</h3>
    </div>
    <div class="row pa-3 mt-4">
      <div class="col-12 col-sm-4">
        <v-select
          :items="linelist"
          v-model="busline"
          label="เลือกสาย"
          outlined
          item-value="BusLineID"
          item-text="LineNameandNumber"
          hide-details="auto"
          dense
          @change="selectClass"
        ></v-select>
      </div>
      <div class="col-12 col-sm-4">
        <v-select
          :items="vehicleclasslist"
          v-model="vehicleclass"
          label="เลือกมาตรฐาน"
          outlined
          item-value="VehClassId"
          item-text="VehClassName"
          @change="selectVehicle"
          dense
          hide-details="auto"
        ></v-select>
      </div>
    </div>
    <div class="row">
      <div
        class="col-12 col-sm-4 col-md-3"
        v-for="(item, i) in vehicleList"
        :key="i"
      >
        <v-card
          @click="handleOpenVehickle"
          hover
          class="rounded-lg elevation-4 pa-2 d-flex justify-space-between"
        >
          <div>
            <div class="pink--text font-weight-bold">
              เลขรถ {{ item.VehicleNumber }}
            </div>
            <div class="font-weight-bold">{{ item.VehClassName }}</div>
            <div class="font-weight-bold grey--text">
              {{ item.LineNameandNumber }}
            </div>
          </div>
          <v-icon large>mdi-chevron-right-circle</v-icon>
        </v-card>
      </div>
    </div>
    <v-dialog max-width="650px" persistent v-model="dlEdit">
      <v-card>
        <v-card-title primary-title class="justify-center font-weight-bold">
          แก้ไขข้อมูลรถ
        </v-card-title>
        <v-card-actions class="justify-center">
          <v-btn color="pink white--text">บันทึก</v-btn>
          <v-btn color="error " outlined @click="dlEdit = false"
            >ยกเลิก</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      linelist: [],
      vehicleclasslist: [],

      dlEdit: false,
      busline: null,
      vehicleclass: null,
      vehicleList: [
        {
          VehicleId: 1,
          VehicleNumber: "เบอร์ 1 (ใช้งาน)",
          VehClassName: "ม.1 พ",
          LineNameandNumber: "สาย 18 กรุงเทพฯ - เชียงใหม่",
          VehClassId: 15,
        },
        {
          VehicleId: 3,
          VehicleNumber: "เบอร์ 2 (ใช้งาน)",
          VehClassName: "ม.1 พ",
          LineNameandNumber: "สาย 18 กรุงเทพฯ - เชียงใหม่",
          VehClassId: 15,
        },
        {
          VehicleId: 4,
          VehicleNumber: "เบอร์ 3 (ใช้งาน)",
          VehClassName: "ม.1 พ",
          LineNameandNumber: "สาย 18 กรุงเทพฯ - เชียงใหม่",
          VehClassId: 15,
        },
        {
          VehicleId: 5,
          VehicleNumber: "เบอร์ 4 (ใช้งาน)",
          VehClassName: "ม.1 พ",
          LineNameandNumber: "สาย 18 กรุงเทพฯ - เชียงใหม่",
          VehClassId: 15,
        },
        {
          VehicleId: 6,
          VehicleNumber: "เบอร์ 5 (ใช้งาน)",
          VehClassName: "ม.1 พ",
          LineNameandNumber: "สาย 18 กรุงเทพฯ - เชียงใหม่",
          VehClassId: 15,
        },
        {
          VehicleId: 7,
          VehicleNumber: "เบอร์ 6 (ใช้งาน)",
          VehClassName: "ม.1 พ",
          LineNameandNumber: "สาย 18 กรุงเทพฯ - เชียงใหม่",
          VehClassId: 15,
        },
        {
          VehicleId: 8,
          VehicleNumber: "เบอร์ 7 (ใช้งาน)",
          VehClassName: "ม.1 พ",
          LineNameandNumber: "สาย 18 กรุงเทพฯ - เชียงใหม่",
          VehClassId: 15,
        },
        {
          VehicleId: 9,
          VehicleNumber: "เบอร์ 8 (ระงับ)",
          VehClassName: "ม.1 พ",
          LineNameandNumber: "สาย 18 กรุงเทพฯ - เชียงใหม่",
          VehClassId: 15,
        },
        {
          VehicleId: 10,
          VehicleNumber: "เบอร์ 9 (ใช้งาน)",
          VehClassName: "ม.1 พ",
          LineNameandNumber: "สาย 18 กรุงเทพฯ - เชียงใหม่",
          VehClassId: 15,
        },
        {
          VehicleId: 10010,
          VehicleNumber: "เบอร์ 10 (ใช้งาน)",
          VehClassName: "ม.1 พ",
          LineNameandNumber: "สาย 18 กรุงเทพฯ - เชียงใหม่",
          VehClassId: 15,
        },
        {
          VehicleId: 10011,
          VehicleNumber: "เบอร์ 11 (ใช้งาน)",
          VehClassName: "ม.1 พ",
          LineNameandNumber: "สาย 18 กรุงเทพฯ - เชียงใหม่",
          VehClassId: 15,
        },
        {
          VehicleId: 10012,
          VehicleNumber: "เบอร์ 12 (ใช้งาน)",
          VehClassName: "ม.1 พ",
          LineNameandNumber: "สาย 18 กรุงเทพฯ - เชียงใหม่",
          VehClassId: 15,
        },
        {
          VehicleId: 10013,
          VehicleNumber: "เบอร์ 13 (ใช้งาน)",
          VehClassName: "ม.1 พ",
          LineNameandNumber: "สาย 18 กรุงเทพฯ - เชียงใหม่",
          VehClassId: 15,
        },
        {
          VehicleId: 20010,
          VehicleNumber: "เบอร์ 14 (ใช้งาน)",
          VehClassName: "ม.1 พ",
          LineNameandNumber: "สาย 18 กรุงเทพฯ - เชียงใหม่",
          VehClassId: 15,
        },
        {
          VehicleId: 20013,
          VehicleNumber: "เบอร์ 5 (ใช้งาน)",
          VehClassName: "ม.1 พ",
          LineNameandNumber: "สาย 18 กรุงเทพฯ - เชียงใหม่",
          VehClassId: 15,
        },
        {
          VehicleId: 20015,
          VehicleNumber: "เบอร์ 40 (ใช้งาน)",
          VehClassName: "ม.1 พ",
          LineNameandNumber: "สาย 18 กรุงเทพฯ - เชียงใหม่",
          VehClassId: 15,
        },
        {
          VehicleId: 20017,
          VehicleNumber: "เบอร์ 41 (ใช้งาน)",
          VehClassName: "ม.1 พ",
          LineNameandNumber: "สาย 18 กรุงเทพฯ - เชียงใหม่",
          VehClassId: 15,
        },
        {
          VehicleId: 20018,
          VehicleNumber: "เบอร์ 42 (ใช้งาน)",
          VehClassName: "ม.1 พ",
          LineNameandNumber: "สาย 18 กรุงเทพฯ - เชียงใหม่",
          VehClassId: 15,
        },
        {
          VehicleId: 20019,
          VehicleNumber: "เบอร์ 43 (ใช้งาน)",
          VehClassName: "ม.1 พ",
          LineNameandNumber: "สาย 18 กรุงเทพฯ - เชียงใหม่",
          VehClassId: 15,
        },
        {
          VehicleId: 20020,
          VehicleNumber: "เบอร์ 44 (ใช้งาน)",
          VehClassName: "ม.1 พ",
          LineNameandNumber: "สาย 18 กรุงเทพฯ - เชียงใหม่",
          VehClassId: 15,
        },
        {
          VehicleId: 20021,
          VehicleNumber: "เบอร์ 45 (ใช้งาน)",
          VehClassName: "ม.1 พ",
          LineNameandNumber: "สาย 18 กรุงเทพฯ - เชียงใหม่",
          VehClassId: 15,
        },
        {
          VehicleId: 20022,
          VehicleNumber: "เบอร์ 46 (ใช้งาน)",
          VehClassName: "ม.1 พ",
          LineNameandNumber: "สาย 18 กรุงเทพฯ - เชียงใหม่",
          VehClassId: 15,
        },
        {
          VehicleId: 20023,
          VehicleNumber: "เบอร์ 47 (ใช้งาน)",
          VehClassName: "ม.1 พ",
          LineNameandNumber: "สาย 18 กรุงเทพฯ - เชียงใหม่",
          VehClassId: 15,
        },
        {
          VehicleId: 20024,
          VehicleNumber: "เบอร์ 48 (ใช้งาน)",
          VehClassName: "ม.1 พ",
          LineNameandNumber: "สาย 18 กรุงเทพฯ - เชียงใหม่",
          VehClassId: 15,
        },
        {
          VehicleId: 20025,
          VehicleNumber: "เบอร์ 49 (ใช้งาน)",
          VehClassName: "ม.1 พ",
          LineNameandNumber: "สาย 18 กรุงเทพฯ - เชียงใหม่",
          VehClassId: 15,
        },
        {
          VehicleId: 20026,
          VehicleNumber: "เบอร์ 50 (ระงับ)",
          VehClassName: "ม.1 พ",
          LineNameandNumber: "สาย 18 กรุงเทพฯ - เชียงใหม่",
          VehClassId: 15,
        },
        {
          VehicleId: 20027,
          VehicleNumber: "เบอร์ 141 (ใช้งาน)",
          VehClassName: "ม.1 พ",
          LineNameandNumber: "สาย 18 กรุงเทพฯ - เชียงใหม่",
          VehClassId: 15,
        },
        {
          VehicleId: 20028,
          VehicleNumber: "เบอร์ 55555 (ใช้งาน)",
          VehClassName: "ม.1 พ",
          LineNameandNumber: "สาย 18 กรุงเทพฯ - เชียงใหม่",
          VehClassId: 15,
        },
        {
          VehicleId: 20029,
          VehicleNumber: "เบอร์ 123456789 (ใช้งาน)",
          VehClassName: "ม.1 พ",
          LineNameandNumber: "สาย 18 กรุงเทพฯ - เชียงใหม่",
          VehClassId: 15,
        },
        {
          VehicleId: 20030,
          VehicleNumber: "เบอร์ 999 (ใช้งาน)",
          VehClassName: "ม.1 พ",
          LineNameandNumber: "สาย 18 กรุงเทพฯ - เชียงใหม่",
          VehClassId: 15,
        },
        {
          VehicleId: 20031,
          VehicleNumber: "เบอร์ 159951 (ใช้งาน)",
          VehClassName: "ม.1 พ",
          LineNameandNumber: "สาย 18 กรุงเทพฯ - เชียงใหม่",
          VehClassId: 15,
        },
        {
          VehicleId: 20032,
          VehicleNumber: "เบอร์ 123 (ใช้งาน)",
          VehClassName: "ม.1 พ",
          LineNameandNumber: "สาย 18 กรุงเทพฯ - เชียงใหม่",
          VehClassId: 15,
        },
      ],
    };
  },
  async mounted() {
    await this.getline();
  },
  methods: {
    async getline() {
      try {
        let { data } = await this.$store.dispatch("getBuslinelist");
        this.linelist = data;
      } catch (error) {
        console.log(error);
      }
    },
    async selectClass(id) {
      this.vehicleclass = null;
      try {
        let { data } = await this.$store.dispatch("getvehicleclasslist", id);
        this.vehicleclasslist = data;
      } catch (error) {
        console.log(error);
      }
    },
    async selectVehicle(id) {
      try {
        let patload = {
          buslineId: this.busline,
          vehClassId: id,
        };
        let { data } = await this.$store.dispatch(
          "getvehiclelistById",
          patload
        );
        this.vehicleclasslist = data;
      } catch (error) {
        console.log(error);
      }
    },
    async handleOpenVehickle() {
      this.dlEdit = true;
    },
  },
};
</script>

<style></style>
