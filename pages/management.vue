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
      <div class="col-12 col-sm-4">
        <v-btn color="pink white--text" @click="handleCreate">เพิ่มรถ</v-btn>
      </div>
    </div>
    <div class="row pb-5">
      <div
        class="col-12 col-sm-4 col-md-3"
        v-for="(item, i) in vehicleList"
        :key="i"
      >
        <v-card
          @click="handleOpenVehickle(item)"
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
    <v-dialog max-width="650px" v-model="dlCreate">
      <v-card>
        <v-card-title primary-title class="justify-center font-weight-bold">
          เพิ่มรถของสาย
        </v-card-title>
        <v-card class="ma-2 pa-3">
          <div class="d-flex align-center">
            <v-avatar color="pink" class="mr-3">
              <v-icon dark> mdi-bus </v-icon>
            </v-avatar>
            <h3 class="pink--text" v-if="busline">
              {{
                linelist.find((x) => x.BusLineID == busline).LineNameandNumber
              }}
            </h3>
          </div>
        </v-card>
        <v-card class="ma-2 pa-3">
          <h4>เลขรถ</h4>
          <v-text-field
            dense
            outlined
            v-model="itemCreate.VehicleNumber"
            solo
          ></v-text-field>

          <h3 class="mt-2">ประเภทรถ</h3>
          <v-select
            :items="dropdownvehicletype"
            item-text="VehicleTypeName"
            item-value="VehicleTypeId"
            dense
            v-model="itemCreate.VehicleTypeId"
            outlined
            solo
          ></v-select>
          <h3 class="mt-2">ผังที่นั่งรถ</h3>
          <div class="row align-baseline">
            <div class="col-10">
              <v-select
                :items="dropdownTemplate"
                item-text="TemplateName"
                item-value="TemplateId"
                dense
                outlined
                v-model="itemCreate.SeatTemplateId"
                solo
              ></v-select>
            </div>
            <div class="col-2">
              <v-btn small text color="pink">ดูผังที่นั่ง</v-btn>
            </div>
          </div>
          <h3 class="mt-2">ทะเบียนรถ</h3>
          <v-text-field
            dense
            outlined
            v-model="itemCreate.LicensePlate"
            solo
          ></v-text-field>

          <h3 class="mt-2">ยี่ห้อรถ</h3>
          <v-select
            :items="dropdownbrandlist"
            item-text="VehBrandName"
            item-value="VehBrandID"
            dense
            outlined
            v-model="itemCreate.BrandId"
            solo
          ></v-select>

          <h3 class="mt-2">สภานะ</h3>
          <v-select
            :items="dropdownStatus"
            dense
            outlined
            v-model="itemCreate.IsActive"
            solo
          ></v-select>
        </v-card>
        <v-card-actions class="justify-center">
          <v-btn color="pink white--text">สร้าง</v-btn>
          <v-btn color="error " outlined @click="dlCreate = false"
            >ยกเลิก</v-btn
          >
        </v-card-actions>
      </v-card></v-dialog
    >
    <v-dialog max-width="650px" persistent v-model="dlEdit">
      <v-card>
        <v-card-title primary-title class="justify-center font-weight-bold">
          แก้ไขข้อมูลรถ
        </v-card-title>
        <v-card class="ma-2 pa-3">
          <h3>จัดการสายรถ</h3>
          <h4 class="pink--text">สาย</h4>
          {{ itemEdit.LineNameandNumber }}
          <h4 class="pink--text">มาตรฐานรถ</h4>
          {{ itemEdit.VehClassName }}
          <hr />
          <h3 class="mt-2">จัดการสายรถ</h3>
          <h4>เลขรถ</h4>
          {{ itemEdit.VehicleNumber }}
          <hr />
          <h3 class="mt-2">ประเภทรถ</h3>
          <v-select
            :items="dropdownvehicletype"
            item-text="VehicleTypeName"
            item-value="VehicleTypeId"
            dense
            v-model="itemEdit.VehicleTypeId"
            outlined
            solo
          ></v-select>
          <h3 class="mt-2">ผังที่นั่งรถ</h3>
          <div class="row align-baseline">
            <div class="col-10">
              <v-select
                :items="dropdownTemplate"
                item-text="TemplateName"
                item-value="TemplateId"
                dense
                outlined
                v-model="itemEdit.SeatTemplateId"
                solo
              ></v-select>
            </div>
            <div class="col-2">
              <v-btn small text color="pink">ดูผังที่นั่ง</v-btn>
            </div>
          </div>
          <h3 class="mt-2">ทะเบียนรถ</h3>
          {{ itemEdit.LicensePlate }}
          <h3 class="mt-2">ยี่ห้อรถ</h3>
          <v-select
            :items="dropdownbrandlist"
            item-text="VehBrandName"
            item-value="VehBrandID"
            dense
            outlined
            v-model="itemEdit.BrandId"
            solo
          ></v-select>

          <h3 class="mt-2">สภานะ</h3>
          <v-select
            :items="dropdownStatus"
            dense
            outlined
            v-model="itemEdit.IsActive"
            solo
          ></v-select>
        </v-card>
        <v-card-actions class="justify-center">
          <v-btn color="pink white--text">บันทึก</v-btn>
          <v-btn color="error " outlined @click="dlEdit = false">ยกเลิก</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dlCreate: false,
      linelist: [],
      vehicleclasslist: [],
      dlEdit: false,
      busline: null,
      vehicleclass: null,
      vehicleList: [],
      itemEdit: {},
      itemCreate: {},
      dropdownTemplate: [],
      dropdownvehicletype: [],
      dropdownbrandlist: [],
      dropdownStatus: [
        { text: "INACTIVE", value: false },
        { text: "ACTIVE", value: true },
      ],
    };
  },
  async mounted() {
    await this.getline();
    await this.getTempalteList();
    await this.getDropdowntype();
    await this.getDropdownbrandlist();
  },
  methods: {
    handleCreate() {
      this.dlCreate = true;
    },
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
        this.vehicleList = data;
      } catch (error) {
        console.log(error);
      }
    },
    async getTempalteList() {
      try {
        let { data } = await this.$store.dispatch("getDropdownTemplateList");
        this.dropdownTemplate = data;
      } catch (error) {
        console.log(error);
      }
    },
    async getDropdowntype() {
      try {
        let { data } = await this.$store.dispatch("getvehicletypefordropdown");
        this.dropdownvehicletype = data;
      } catch (error) {
        console.log(error);
      }
    },
    async getDropdownbrandlist() {
      try {
        let { data } = await this.$store.dispatch("getbrandlistfordropdown");
        this.dropdownbrandlist = data;
      } catch (error) {
        console.log(error);
      }
    },
    async getSeatePlane(item) {
      try {
        let { data } = await this.$store.dispatch(
          "getSeatplanvehicle",
          item.VehicleId
        );

        return data;
      } catch (error) {
        console.log(error);
      }
    },

    async handleOpenVehickle(item) {
      console.log(item);
      let seatplan = await this.getSeatePlane(item);
      let { data: getvehicleInfo } = await this.$store.dispatch(
        "getvehicleInfo",
        item.VehicleId
      );
      this.itemEdit = { ...item, ...getvehicleInfo };
      // this.itemEdit = { ...item, ...seatplan };

      console.log(this.itemEdit, "this.itemEdit");
      this.dlEdit = true;
    },
  },
};
</script>

<style></style>
