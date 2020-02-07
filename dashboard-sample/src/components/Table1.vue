<template>
<div>
  <Card :title="title" :subDesc="subDesc">
      <WorkingTypeSelector slot="selects1"/>
  <CenterSelector slot="selects2"/>
    <v-container slot="contents">
        <table>
            <tr>
                <th>report_date</th>
                <th>report_date</th>
                <th>report_date</th>
                <th>report_date</th>
                <th>report_date</th>
                <th>report_date</th>
                <th>report_date</th>
                <th>report_date</th>
                <th>report_date</th>
            </tr>
            <tr>
                <td>201892303</td>
                <td>201892303</td>
                <td>201892303</td>
                <td>201892303</td>
                <td>201892303</td>
                <td>201892303</td>
                <td>201892303</td>
                <td>201892303</td>
                <td>201892303</td>
            </tr>
        </table>
    </v-container>
  </Card>
</div>
</template>

<script>
import Card from './Card.vue';
import WorkingTypeSelector from './WorkingTypeSelector.vue';
import CenterSelector from './CenterSelector.vue';

export default {
  name: 'Table1',
  components: { Card, WorkingTypeSelector, CenterSelector },
  data() {
    return {
      title: '미결현황',
      subDesc: '10분 마다 재적재',
    };
  },
};
</script>

<style>

</style>
