<template>
<div>
  <WorkingTypeSelector slot="selects"/>
  <Card :title="title" :subDesc="subDesc">
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

export default {
  name: 'Table1',
  components: { Card, WorkingTypeSelector },
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
