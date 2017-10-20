<template>
  <div>
    <div class="layout-breadcrumb">
      <Breadcrumb>
        <BreadcrumbItem href="#">首页</BreadcrumbItem>
        <BreadcrumbItem>Excle上传</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <br/>
    <Upload
      ref="upload"
      type="drag"
      action="/api/preview"
      :multiple="false"
      :format="['xlsx','xls']"
      :on-remove="handleRemove"
      :on-error="handleError"
      :on-format-error="handleFormatError"
      :before-upload="handleBeforeUpload"
      :on-success="handleSuccess">
      <div style="padding: 20px 0">
        <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
        <p>点击或将文件拖拽到这里上传</p>
      </div>
    </Upload>
    <Row>
      <Col span="24">
      <Button type='primary' size='large' v-bind:disabled="disabled" @click='importData()'
              style="float:right;">
        <Icon type='upload'></Icon>
        导入数据
      </Button>
      </Col>
    </Row>
    <br>
    <div style="background:#eee;padding: 10px">
      <Card :bordered="false">
        <p slot="title">数据预览</p>
        <Table :height="520" :stripe="true" :columns='tableTitle' :data='tableData' size='small' ref='table'></Table>
      </Card>
    </div>
  </div>
</template>

<script>
  import tableTitle from '../table-title/import-table-title-config'
  import * as APi from '../api'

  export default {
    data () {
      return {
        disabled: true,
        tableTitle: tableTitle,
        tableData: [],
        file: {}
      }
    },
    methods: {
      handleSuccess (res) {
        if (res.resultCode === 'OK') {
          this.tableData = res.result
          this.disabled = false
        } else {
          this.$refs.upload.fileList = []
          this.tableData = []
          this.$Notice.error({
            title: `上传失败`,
            desc: res.errorMessage
          })
        }
        this.$Spin.hide()
      },
      handleRemove () {
        this.tableData = []
        this.disabled = true
      },
      handleFormatError (file) {
        this.$Notice.warning({
          title: '文件格式不正确',
          desc: '文件 ' + file.name + ' 格式不正确，请上传 .xlsx 格式的图片。'
        })
        this.$Spin.hide()
      },
      handleBeforeUpload () {
        const check = this.$refs.upload.fileList.length < 1
        if (!check) {
          this.$Notice.warning({
            title: '只能上传 1 个文件。'
          })
        } else {
          this.$Spin.show()
        }
        return check
      },
      handleError (error) {
        this.$Notice.error({
          title: `上传文件发生错误`,
          desc: error
        })
        this.$Spin.hide()
      },
      importData () {
        this.$Modal.confirm({
          title: '提示',
          content: '确认要导入数据吗？',
          onOk: () => {
            this.$Spin.show()
            this.postData()
          }
        })
      },
      postData () {
        APi.importReportData(this.tableData).then(res => {
          if (res.data.resultCode === 'OK') {
            this.$Notice.success({title: '上传成功', desc: '恭喜您,上传成功 ^_^ ！'})
            this.$refs.upload.fileList = []
            this.tableData = []
            this.disabled = true
          } else {
            this.$Notice.error({
              title: '上传失败',
              desc: res.data.errorMessage
            })
          }
          this.$Spin.hide()
        }, error => {
          console.log(error)
          this.$Notice.error({
            title: '上传失败',
            desc: '系统异常，请联系管理员 (ˇ^ˇ) ！'
          })
          this.$Spin.hide()
        })
      }
    }
  }
</script>

<style scoped>
</style>
