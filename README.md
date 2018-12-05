# v-jquery-collaboration
Vue directive that allows you to use jquery packages.

[Demo](https://demo-laravel52.capilano-fw.com/vue_jquery_collaboration)

# Installation

    npm i v-jquery-collaboration --save
    
# Usage

## select2

    <!-- The simplest way -->
    <select v-jquery-collaboration="'select2'">
        <option value="red">Red</option>
        <option value="blue">Bule</option>
        <option value="yellow">Yellow</option>
    </select>
    
    <!-- with Options -->
    <select v-jquery-collaboration="['select2', options]">
        <option value="red">Red</option>
        <option value="blue">Bule</option>
        <option value="yellow">Yellow</option>
    </select>
    
    <!-- with v-model -->
    <select v-model="value" v-jquery-collaboration="['select2', options]">
        <option value="red">Red</option>
        <option value="blue">Bule</option>
        <option value="yellow">Yellow</option>
    </select>
    
## DatePicker

    <!-- The simplest way -->
    <input type="text" v-jquery-collaboration="'datepicker'">
    
    <!-- with Options -->
    <input type="text" v-jquery-collaboration="['datepicker', options]">
    
    <!-- with v-model -->
    <input type="text" v-model="value" v-jquery-collaboration="['datepicker', options]">

## TimePicker

    <!-- The simplest way -->
    <input type="text" v-jquery-collaboration="'timepicker'">
    
    <!-- with Options -->
    <input type="text" v-jquery-collaboration="['timepicker', options]">
    
    <!-- with v-model -->
    <input type="text" v-model="value" v-jquery-collaboration="['timepicker', options]">

## dataTable

    <!-- The simplest way -->
    <table v-jquery-collaboration="'datatable'">
        <thead>
            <tr><td>Column</td></tr>
        </thead>
        <tbody>
            <tr v-for="i in 25"><td v-text="i"></td></tr>
        </tbody>
    </table>
    
    <!-- with Options -->
    <table v-jquery-collaboration="['datatable', options]">
        <thead>
            <tr><td>Column</td></tr>
        </thead>
        <tbody>
            <tr v-for="i in 25"><td v-text="i"></td></tr>
        </tbody>
    </table>
    
## iCheck

iCheck must have options to show radio button or checkbox.

### Radio button

    <!-- with Options -->
    <label v-for="i in 10">
        <input name="radio_1" type="radio" :value="i" v-jquery-collaboration="['icheck', options]"> {{ i }}
    </label>
    
    <!-- with v-model -->
    <label v-for="i in 10">
        <input name="radio_2" v-model="value" type="radio" :value="i" v-jquery-collaboration="['icheck', options]"> {{ i }}
    </label>
    
### Checkbox

    <!-- with Options -->
    <label v-for="i in 10">
        <input name="checkbox_1" type="checkbox" :value="i" v-jquery-collaboration="['icheck', options]"> @{{ i }}
    </label>
    
    <!-- with v-model -->
    <label v-for="i in 10">
        <input name="checkbox_2" v-model="value" type="checkbox" :value="i" v-jquery-collaboration="['icheck', options]"> @{{ i }}
    </label>
    
# License

This package is licensed under the MIT License.

Copyright 2018 Sukohi Kuhoh