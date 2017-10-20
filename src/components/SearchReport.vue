<template>
  <div>
    <div class="layout-breadcrumb">
      <Breadcrumb>
        <BreadcrumbItem href="#">首页</BreadcrumbItem>
        <BreadcrumbItem>查看报表</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <br/>
    <Form :model="searchParams" :label-width="110">
      <Row>
        <Col span="6">
        <FormItem label="拓展时间">
          <DatePicker type="daterange" :options="options1" v-model="searchParams.expandTimeRange" placement="bottom"
                      placeholder="请选择拓展时间"
                      style="width: 100%"></DatePicker>
        </FormItem>
        </Col>
        <Col span="7" offset="1">
        <FormItem label="商家名称">
          <Input v-model="searchParams.businessName" placeholder="请输入商家名称"/>
        </FormItem>
        </Col>
        <Col span="7" offset="1">
        <FormItem label="商家PID">
          <Input v-model="searchParams.businessPID" placeholder="请输入商家PID"/>
        </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="6">
        <FormItem label="日期">
          <DatePicker type="daterange" :options="options1" v-model="searchParams.dateRange" placement="bottom"
                      placeholder="请选择日期"
                      style="width: 100%"></DatePicker>
        </FormItem>
        </Col>
        <Col span="7" offset="1">
        <FormItem label="归属员工姓名">
          <Input v-model="searchParams.empName" placeholder="请输入归属员工姓名"/>
        </FormItem>
        </Col>
      </Row>
    </Form>
    <Row>
      <Col span="24">
      <Button type="primary" v-bind:disabled="tableData.length==0" size="large" @click="exportData()"
              style="float:right;">
        <Icon type="ios-download-outline"></Icon>
        导出数据
      </Button>
      <Button type='primary' size='large' @click='handelSearch()'
              style="float:right;margin-right: 20px;">
        <Icon type='search'></Icon>
        查询
      </Button>
      </Col>
    </Row>
    <br>
    <Table :columns="tableTitle" :height="600" :data="tableData" :stripe="true" size="small" ref="table"></Table>
  </div>
</template>

<script>
  import tableTitle from '../table-title/search-table-title-config'
  import * as APi from '../api'

  export default {
    data () {
      return {
        searchParams: {
          expandTimeRange: [this.getDateStr(-30), this.getDateStr(0)]
        },
        tableTitle: tableTitle,
        tableData: [],
        options1: {
          disabledDate (date) {
            return date && date.valueOf() > Date.now()
          }
        }
      }
    },
    methods: {
      handelSearch () {
        this.current = 1
        this.getReportData()
      },
      getReportData () {
        const [startExpandTime, endExpandTime] = this.searchParams.expandTimeRange
        const [startDate, endDate] = this.searchParams.dateRange
        if (startExpandTime && endExpandTime) {
          this.searchParams.startExpandTimeStr = startExpandTime
          this.searchParams.endExpandTimeStr = endExpandTime
          this.searchParams.startDate = startDate
          this.searchParams.endDate = endDate
          this.$Spin.show()
          APi.getReportData(this.searchParams).then(res => {
            if (res.data.resultCode === 'OK') {
              this.tableData = res.data.result.items
              this.tableData.forEach((data, i) => {
                data.id = this.searchParams.start + 1 + i
              })
              this.total = res.data.result.total
            } else {
              this.$Notice.error({
                title: '查询失败',
                desc: res.data.errorMessage
              })
            }
            this.$Spin.hide()
          }, error => {
            console.log(error)
            this.$Notice.error({
              title: '查询失败',
              desc: '系统异常，请联系管理员 (ˇ^ˇ)！'
            })
            this.$Spin.hide()
          })
        } else {
          this.$Notice.error({
            title: '查询条件错误',
            desc: '拓展时间不能空 (ˇ^ˇ)！'
          })
        }
      },
      exportData (type) {
        this.$refs.table.exportCsv({
          filename: this.searchParams.startDateStr + '-' + this.searchParams.endDateStr
        })
      },
      getDateStr (AddDayCount) {
        var dd = new Date()
        dd.setDate(dd.getDate() + AddDayCount)
        var y = dd.getFullYear()
        var m = dd.getMonth() + 1
        var d = dd.getDate()
        return y + '-' + m + '-' + d
      }
    }
  }
</script>

<style scoped>
</style>
