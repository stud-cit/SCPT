<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <v-card>
          <v-toolbar flat color="white">
            <v-card-title class="title">Courses</v-card-title>
            <v-spacer />
            <v-dialog v-model="DialogCourse" max-width="500px">
              <template v-slot:activator="{ on }">
                <v-btn color="primary" dark class="mb-2" v-on="on">
                  <v-icon>mdi-plus</v-icon>
                  New Item
                </v-btn>
              </template>
              <v-card>
                <v-card-text>
                  <v-container grid-list-md>
                    <v-layout wrap>
                      <v-flex xs12 sm6 md4>
                        <v-text-field
                          v-model="NewCourse.title"
                          label="Name"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6 md4>
                        <v-text-field
                          v-model="NewCourse.data"
                          label="Data"
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="CloseCourse"
                    >Cancel</v-btn
                  >
                  <v-btn color="blue darken-1" text @click="SaveCourse"
                    >Save</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
          <v-data-table
            :headers="CoursesHeaders"
            :items="courses"
            search
            class="elevation-1"
          >
            <template v-slot:items="item">
              <td>
                <v-edit-dialog
                  :return-value.sync="item.item.title"
                  @save="save"
                  @cancel="cancel"
                  @open="open"
                >
                  {{ item.item.title }}
                  <template v-slot:input>
                    <v-text-field
                      v-model="item.item.title"
                      maxlength="255"
                      label="Edit"
                      single-line
                      counter
                    ></v-text-field>
                  </template>
                </v-edit-dialog>
              </td>
              <td class="text-xs-left">
                <v-edit-dialog
                  :return-value.sync="item.item.data"
                  @save="save"
                  @cancel="cancel"
                  @open="open"
                >
                  {{ item.item.data }}
                  <template v-slot:input>
                    <v-text-field
                      v-model="item.item.data"
                      maxlength="255"
                      label="Edit"
                      single-line
                      counter
                    ></v-text-field>
                  </template>
                </v-edit-dialog>
              </td>
              <td class="text-xs-right">
                <v-icon small @click="DeleteCourse(item.item)">
                  mdi-delete
                </v-icon>
              </td>
            </template>
          </v-data-table>
          <v-snackbar v-model="snack" :timeout="3000" :color="snackColor">
            {{ snackText }}
            <v-btn text flat @click="snack = false">Close</v-btn>
          </v-snackbar>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout mt-5 justify-space-around row>
      <v-flex xs8>
        <v-select
          v-model="selected"
          :items="courses"
          item-text="title"
          return-object
          label="Course"
        />
      </v-flex>
    </v-layout>
    <v-layout mt-1>
      <v-flex xs12>
        <v-card>
          <v-toolbar flat color="white">
            <v-card-title class="title">Validated Users</v-card-title>
            <v-spacer />
            <v-dialog
              v-if="isEmpty(selected)"
              v-model="DialogValidate"
              max-width="500px"
            >
              <template v-slot:activator="{ on }">
                <v-btn color="primary" dark class="mb-2" v-on="on">
                  <v-icon>mdi-plus</v-icon>
                  New Item
                </v-btn>
              </template>
              <v-card>
                <v-card-text>
                  <v-container grid-list-md>
                    <v-layout wrap>
                      <v-flex xs12>
                        <v-text-field
                          v-model="NewUser.name"
                          label="Name"
                        ></v-text-field>
                        <v-text-field
                          v-model="NewUser.course"
                          label="Course"
                        ></v-text-field>
                        <v-text-field
                          v-model="NewUser.email"
                          label="Email"
                        ></v-text-field>
                        <v-text-field
                          v-model="NewUser.phone"
                          label="Phone"
                        ></v-text-field>
                        <v-text-field
                          v-model="NewUser.data"
                          label="Data"
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="CloseValidate"
                    >Cancel</v-btn
                  >
                  <v-btn color="blue darken-1" text @click="SaveValidate"
                    >Save</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
          <v-data-table
            :headers="UserHeaders"
            :items="selected.validate"
            class="elevation-1"
          >
            <template v-slot:items="item">
              <td>
                <v-edit-dialog
                  :return-value.sync="item.item.name"
                  @save="save"
                  @cancel="cancel"
                  @open="open"
                >
                  {{ item.item.name }}
                  <template v-slot:input>
                    <v-text-field
                      v-model="item.item.name"
                      maxlength="255"
                      label="Edit"
                      single-line
                      counter
                    ></v-text-field>
                  </template>
                </v-edit-dialog>
              </td>
              <td class="text-xs-left">
                <v-edit-dialog
                  :return-value.sync="item.item.course"
                  @save="save"
                  @cancel="cancel"
                  @open="open"
                >
                  {{ item.item.course }}
                  <template v-slot:input>
                    <v-text-field
                      v-model="item.item.course"
                      maxlength="255"
                      label="Edit"
                      single-line
                      counter
                    ></v-text-field>
                  </template>
                </v-edit-dialog>
              </td>
              <td class="text-xs-left">
                <v-edit-dialog
                  :return-value.sync="item.item.email"
                  @save="save"
                  @cancel="cancel"
                  @open="open"
                >
                  {{ item.item.email }}
                  <template v-slot:input>
                    <v-text-field
                      v-model="item.item.email"
                      maxlength="255"
                      label="Edit"
                      single-line
                      counter
                    ></v-text-field>
                  </template>
                </v-edit-dialog>
              </td>
              <td class="text-xs-left">
                <v-edit-dialog
                  :return-value.sync="item.item.phone"
                  @save="save"
                  @cancel="cancel"
                  @open="open"
                >
                  {{ item.item.phone }}
                  <template v-slot:input>
                    <v-text-field
                      v-model="item.item.phone"
                      maxlength="255"
                      label="Edit"
                      single-line
                      counter
                    ></v-text-field>
                  </template>
                </v-edit-dialog>
              </td>
              <td class="text-xs-left">
                <v-edit-dialog
                  :return-value.sync="item.item.data"
                  @save="save"
                  @cancel="cancel"
                  @open="open"
                >
                  {{ item.item.data }}
                  <template v-slot:input>
                    <v-text-field
                      v-model="item.item.data"
                      maxlength="255"
                      label="Edit"
                      single-line
                      counter
                    ></v-text-field>
                  </template>
                </v-edit-dialog>
              </td>
              <td class="text-xs-right">
                <v-icon small @click="DeleteValidate(item.item)">
                  mdi-delete
                </v-icon>
              </td>
            </template>
          </v-data-table>
          <v-snackbar v-model="snack" :timeout="3000" :color="snackColor">
            {{ snackText }}
            <v-btn text flat @click="snack = false">Close</v-btn>
          </v-snackbar>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout mt-5>
      <v-flex xs12>
        <v-card>
          <v-toolbar flat color="white">
            <v-card-title class="title">Not Validated Users</v-card-title>
            <v-spacer />
            <v-dialog
              v-if="isEmpty(selected)"
              v-model="DialogNotValidate"
              max-width="500px"
            >
              <template v-slot:activator="{ on }">
                <v-btn color="primary" dark class="mb-2" v-on="on">
                  <v-icon>mdi-plus</v-icon>
                  New Item
                </v-btn>
              </template>
              <v-card>
                <v-card-text>
                  <v-container grid-list-md>
                    <v-layout wrap>
                      <v-flex xs12>
                        <v-text-field
                          v-model="NewUser.name"
                          label="Name"
                        ></v-text-field>
                        <v-text-field
                          v-model="NewUser.course"
                          label="Course"
                        ></v-text-field>
                        <v-text-field
                          v-model="NewUser.email"
                          label="Email"
                        ></v-text-field>
                        <v-text-field
                          v-model="NewUser.phone"
                          label="Phone"
                        ></v-text-field>
                        <v-text-field
                          v-model="NewUser.data"
                          label="Data"
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="CloseNotValidate"
                    >Cancel</v-btn
                  >
                  <v-btn color="blue darken-1" text @click="SaveNotValidate"
                    >Save</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
          <v-data-table
            :headers="UserHeaders"
            :items="selected.notvalidate"
            class="elevation-1"
          >
            <template v-slot:items="item">
              <td>
                <v-edit-dialog
                  :return-value.sync="item.item.name"
                  @save="save"
                  @cancel="cancel"
                  @open="open"
                >
                  {{ item.item.name }}
                  <template v-slot:input>
                    <v-text-field
                      v-model="item.item.name"
                      maxlength="255"
                      label="Edit"
                      single-line
                      counter
                    ></v-text-field>
                  </template>
                </v-edit-dialog>
              </td>
              <td class="text-xs-left">
                <v-edit-dialog
                  :return-value.sync="item.item.course"
                  @save="save"
                  @cancel="cancel"
                  @open="open"
                >
                  {{ item.item.course }}
                  <template v-slot:input>
                    <v-text-field
                      v-model="item.item.course"
                      maxlength="255"
                      label="Edit"
                      single-line
                      counter
                    ></v-text-field>
                  </template>
                </v-edit-dialog>
              </td>
              <td class="text-xs-left">
                <v-edit-dialog
                  :return-value.sync="item.item.email"
                  @save="save"
                  @cancel="cancel"
                  @open="open"
                >
                  {{ item.item.email }}
                  <template v-slot:input>
                    <v-text-field
                      v-model="item.item.email"
                      maxlength="255"
                      label="Edit"
                      single-line
                      counter
                    ></v-text-field>
                  </template>
                </v-edit-dialog>
              </td>
              <td class="text-xs-left">
                <v-edit-dialog
                  :return-value.sync="item.item.phone"
                  @save="save"
                  @cancel="cancel"
                  @open="open"
                >
                  {{ item.item.phone }}
                  <template v-slot:input>
                    <v-text-field
                      v-model="item.item.phone"
                      maxlength="255"
                      label="Edit"
                      single-line
                      counter
                    ></v-text-field>
                  </template>
                </v-edit-dialog>
              </td>
              <td class="text-xs-left">
                <v-edit-dialog
                  :return-value.sync="item.item.data"
                  @save="save"
                  @cancel="cancel"
                  @open="open"
                >
                  {{ item.item.data }}
                  <template v-slot:input>
                    <v-text-field
                      v-model="item.item.data"
                      maxlength="255"
                      label="Edit"
                      single-line
                      counter
                    ></v-text-field>
                  </template>
                </v-edit-dialog>
              </td>
              <td class="text-xs-right">
                <v-icon small @click="DeleteNotValidate(item.item)">
                  mdi-delete
                </v-icon>
              </td>
            </template>
          </v-data-table>
          <v-snackbar v-model="snack" :timeout="3000" :color="snackColor">
            {{ snackText }}
            <v-btn text flat @click="snack = false">Close</v-btn>
          </v-snackbar>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  layout: 'dashboard',
  head: {
    title: 'Адмін панель',
  },
  components: {
    LoremContent: () => import('~/components/LoremContent'),
  },
})
export default class AdminPage extends Vue {
  snack: boolean = false;
  snackColor = '';
  snackText = '';
  DialogCourse: boolean = false;
  DialogValidate: boolean = false;
  DialogNotValidate: boolean = false;

  editedIndex = -1;
  NewCourse = {
    title: '',
    data: '',
    validate: [],
    notvalidate: [],
  };
  DefaultCourse = {
    title: '',
    data: '',
    validate: [],
    notvalidate: [],
  };

  NewUser = {
    name: ``,
    email: ``,
    course: ``,
    phone: ``,
    data: ``,
  };
  DefaultUser = {
    name: ``,
    email: ``,
    course: ``,
    phone: ``,
    data: ``,
  };

  CoursesHeaders = [
    {
      text: 'Name',
      align: 'left',
      sortable: false,
      value: 'name',
    },
    { text: 'Data', value: 'data' },
    { text: 'actions', sortable: false, align: 'right' },
  ];

  UserHeaders = [
    {
      text: 'Name',
      align: 'left',
      sortable: false,
      value: 'name',
    },
    { text: 'Course', value: 'course' },
    { text: 'Email', value: 'email' },
    { text: 'Phone', value: 'phone' },
    { text: 'data', value: 'data' },
  ];
  selected = {};
  isEmpty(obj) {
    for (var key in obj) {
      return true;
    }
    return false;
  }

  courses = new Array(5).fill('').map((item, i) => ({
    title: `Lorem${i + 1}`,
    validate: new Array(15).fill('').map((item, i) => ({
      name: `lorem${i + 1}`,
      email: `lorem${i + 1}@gmail.com`,
      course: `lorem${i + 1}`,
      phone: `+38095033005${i + 1}`,
      data: `lorem${i + 1}`,
    })),
    notvalidate: new Array(15).fill('').map((item, i) => ({
      name: `lorem${i + 1}`,
      email: `lorem${i + 1}@gmail.com`,
      course: `lorem${i + 1}`,
      phone: `+38095033005${i + 1}`,
      data: `lorem${i + 1}`,
    })),
    data: `lorem${i + 1}`,
  }));

  save() {
    this.snack = true;
    this.snackColor = 'success';
    this.snackText = 'Data saved';
  }
  cancel() {
    this.snack = true;
    this.snackColor = 'error';
    this.snackText = 'Canceled';
  }
  open() {
    this.snack = true;
    this.snackColor = 'info';
    this.snackText = 'Dialog opened';
  }

  DeleteCourse(item) {
    const index = this.courses.indexOf(item);
    confirm('Are you sure you want to delete this item?') &&
      this.courses.splice(index, 1);
  }
  DeleteValidate(item) {
    const index = this.selected.validate.indexOf(item);
    confirm('Are you sure you want to delete this item?') &&
      this.selected.validate.splice(index, 1);
  }
  DeleteNotValidate(item) {
    const index = this.selected.notvalidate.indexOf(item);
    confirm('Are you sure you want to delete this item?') &&
      this.selected.notvalidate.splice(index, 1);
  }

  CloseCourse() {
    this.DialogCourse = false;
    setTimeout(() => {
      this.NewCourse = Object.assign({}, this.DefaultCourse);
      this.editedIndex = -1;
    }, 300);
  }

  SaveCourse() {
    if (this.editedIndex > -1) {
      Object.assign(this.courses[this.editedIndex], this.NewCourse);
    } else {
      this.courses.push(this.NewCourse);
    }
    this.CloseCourse();
  }
  CloseValidate() {
    this.DialogValidate = false;
    setTimeout(() => {
      this.NewUser = Object.assign({}, this.DefaultCourse);
      this.editedIndex = -1;
    }, 300);
  }

  SaveValidate() {
    if (this.editedIndex > -1) {
      Object.assign(this.selected.validate[this.editedIndex], this.NewUser);
    } else {
      this.selected.validate.push(this.NewUser);
    }
    this.CloseValidate();
  }
  CloseNotValidate() {
    this.DialogNotValidate = false;
    setTimeout(() => {
      this.NewUser = Object.assign({}, this.DefaultUser);
      this.editedIndex = -1;
    }, 300);
  }

  SaveNotValidate() {
    if (this.editedIndex > -1) {
      Object.assign(this.selected.notvalidate[this.editedIndex], this.NewUser);
    } else {
      this.selected.notvalidate.push(this.NewUser);
    }
    this.CloseNotValidate();
  }
}
</script>

<style scoped></style>
