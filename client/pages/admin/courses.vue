<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <v-card>
          <v-toolbar flat color="white">
            <v-card-title class="title">Курси</v-card-title>
            <v-spacer />
            <v-dialog v-model="dialogCourse" max-width="500px">
              <template v-slot:activator="{ on }">
                <v-btn color="primary" dark class="mb-2" v-on="on">
                  <v-icon>mdi-plus</v-icon>
                  Додати курс
                </v-btn>
              </template>
              <v-card>
                <v-card-text>
                  <v-container grid-list-md>
                    <v-layout wrap>
                      <v-flex xs12>
                        <v-text-field
                          v-model="editCourse.title"
                          label="Назва"
                        ></v-text-field>
                        <v-text-field
                          v-model="editCourse.data"
                          label="Дата"
                        ></v-text-field>
                        <v-textarea
                          v-model="editCourse.description"
                          label="Описание"
                        ></v-textarea>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-layout justify-space-around aling-center fill-height>
                    <v-btn color="primary" text @click="CloseCourse">
                      Закрити
                    </v-btn>
                    <v-btn color="primary" text @click="SaveCourse">
                      Зберегти
                    </v-btn>
                  </v-layout>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
          <v-data-table
            :headers="coursesHeaders"
            :items="courses"
            item-key="title"
            :expand="expand"
            search
            class="elevation-1"
          >
            <template v-slot:items="props">
              <td>{{ props.item.title }}</td>
              <td class="text-xs-left">{{ props.item.data }}</td>
              <td class="text-xs-center pl-5">
                <v-btn flat color="primary" @click="props.expanded=!props.expanded">Показати</v-btn>
              </td>
              <td class="text-xs-right">
                <v-icon small @click="EditCourse(props.item)">
                  mdi-pencil
                </v-icon>
                <v-icon small @click="DeleteCourse(props.item)">
                  mdi-delete
                </v-icon>
              </td>
          </template>
          <template v-slot:expand="props">
            <v-card flat>
              <v-card-text>{{props.item.description}}</v-card-text>
            </v-card>
          </template>
          </v-data-table>
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
            <v-card-title class="title">Користувачi</v-card-title>
            <v-spacer />
            <v-dialog
              persistent
              v-if="isEmpty(selected)"
              v-model="dialogUsers"
              max-width="500px"
            >
              <template v-slot:activator="{ on }">
                <v-btn color="primary" dark class="mb-2" v-on="on">
                  <v-icon>mdi-plus</v-icon>
                  Додати користувача
                </v-btn>
              </template>
              <v-card>
                <v-card-text>
                  <v-container grid-list-md>
                    <v-layout wrap>
                      <v-flex xs12>
                        <ValidationObserver>
                          <v-text-field
                            :rules="[rules.required]"
                            v-model="editUser.name"
                            label="ФИО"
                            type="text"
                          ></v-text-field>
                          <v-text-field
                            :rules="[rules.required]"
                            v-model="editUser.course"
                            label="Курс"
                          ></v-text-field>
                          <v-text-field
                            :rules="[rules.email]"
                            v-model="editUser.email"
                            label="Email"
                          ></v-text-field>
                          <v-text-field
                            v-model="editUser.phone"
                            label="Телефон"
                          ></v-text-field>
                          <v-text-field
                            v-model="editUser.data"
                            label="Дата"
                          ></v-text-field>
                        </ValidationObserver>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-layout justify-space-around aling-center fill-height>
                    <v-btn color="primary" text @click="CloseUser">
                      Закрити
                    </v-btn>
                    <v-btn color="primary" text @click="SaveUser">
                      Зберегти
                    </v-btn>
                  </v-layout>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
          <v-data-table
            :headers="userHeaders"
            :items="selected.users"
            class="elevation-1"
          >
            <template v-slot:items="props">
              <td>{{ props.item.name }}</td>
              <td class="text-xs-left">{{ props.item.course }}</td>
              <td class="text-xs-left">{{ props.item.email }}</td>
              <td class="text-xs-left">{{ props.item.phone }}</td>
              <td class="text-xs-left">{{ props.item.data }}</td>
              <td class="text-xs-left pl-5">
                <v-icon v-if="props.item.validation==true"  class="green--text">mdi-check</v-icon>
                <v-icon v-if="props.item.validation==false" class="red--text">mdi-close</v-icon>
              </td>
              <td class="text-xs-right">
                <v-icon small @click="EditUser(props.item)">
                  mdi-pencil
                </v-icon>
                <v-icon small @click="DeleteUser(props.item)">
                  mdi-delete
                </v-icon>
              </td>
            </template>
          </v-data-table>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ValidationObserver } from 'vee-validate';

@Component({
  layout: 'dashboard',
  head: {
    title: 'Адмін панель',
  },
  components: {
    LoremContent: () => import('~/components/LoremContent'),
    TextField: () => import('~/components/inputs/TextField'),
    ValidationObserver,
  },
})
export default class AdminPage extends Vue {
  dialogCourse: boolean = false;
  dialogUsers: boolean = false;
  expand : boolean = false;

  rules ={
    required: value => !!value || 'Required.',
    email: value => {
      const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return pattern.test(value) || 'Invalid e-mail.'
  }};

  editedIndex = -1;

  editCourse = {
    title: null,
    data: null,
    users: [],
    description : null,
  };
  defaultCourse = {
    title: null,
    data: null,
    users: [],
    description : null,
  };

  editUser = {
    name: null,
    course: null,
    email: null,
    phone: null,
    data: null,
    validation : true,
  };
  defaultUser = {
    name: null,
    course: null,
    email: null,
    phone: null,
    data: null,
    validation : true,
  };
  coursesHeaders = [
    {
      text: 'Назва курсу',
      align: 'left',
      sortable: false,
      value: 'name',
    },
    { text: 'Дата', value: 'data' },
    { text: 'Опис', align: 'center', value: 'description' },
    { text: '',align: 'right', sortable: false,  },
  ];

  userHeaders = [
    {
      text: 'ФИО',
      align: 'left',
      sortable: false,
      value: 'name',
    },
    { text: 'Курс', value: 'course' },
    { text: 'Email', value: 'email' },
    { text: 'Телефон', value: 'phone' },
    { text: 'Дата', value: 'data' },
    { text: 'Пiдтвердив', value: 'validation' },
    { text: ' ', value: 'validation' },
  ];
  selected = [];
  isEmpty(obj) {
    for (var key in obj) {
      return true;
    }
    return false;
  }

  courses = new Array(5).fill('').map((item, i) => ({
    title: `Lorem${i + 1}`,
    data: `lorem${i + 1}`,
    users: new Array(15).fill('').map((item, i) => ({
      name: `lorem${i + 1}`,
      course: `lorem${i + 1}`,
      email: `lorem${i + 1}@gmail.com`,
      phone: `+38095033005${i + 1}`,
      data: `lorem${i + 1}`,
      validation : true,
    })),
    description : `lorem ipsum ${i+1}`,
  }));


  EditCourse (item) {
    this.editedIndex = this.courses.indexOf(item)
    this.editCourse = Object.assign({}, item)
    this.dialogCourse = true
  }
  SaveCourse() {
    if (this.editedIndex > -1) {
      Object.assign(this.courses[this.editedIndex], this.editCourse);
    } else {
      this.courses.push(this.editCourse);
    }
    this.CloseCourse();
  }
  CloseCourse() {
    this.dialogCourse = false;
    setTimeout(() => {
      this.editCourse = Object.assign({}, this.defaultCourse);
      this.editedIndex = -1;
    }, 300);
  }
  DeleteCourse(item) {
    const index = this.courses.indexOf(item);
    confirm('Ви впевненi, що хочете видалити курс?') &&
    this.courses.splice(index, 1);
  }


  EditUser (item) {
    this.editedIndex = this.selected.users.indexOf(item)
    this.editUser = Object.assign({}, item)
    this.dialogUsers = true
  }
  SaveUser() {
    if (this.editedIndex > -1) {
      Object.assign(this.selected.users[this.editedIndex], this.editUser);
    } else {
      this.selected.users.push(this.editUser);
    }
    this.CloseUser();
  }
  CloseUser() {
    this.dialogUsers = false;
    setTimeout(() => {
      this.editUser = Object.assign({}, this.defaultUser);
      this.editedIndex = -1;
    }, 300);
  }
  DeleteUser(item) {
    const index = this.selected.users.indexOf(item);
    confirm('Ви впевненi, що хочете видалити користувача?') &&
    this.selected.users.splice(index, 1);
  }
}
</script>

<style scoped></style>
