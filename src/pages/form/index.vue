<template>
  <div class="form-page">
    <el-row :gutter="20">
      <el-col :span="10" :offset="7">
        <el-form ref="form"
                 :model="form"
                 :rules="rules"
                 :label-position="labelPosition"
                 label-width="100px">
          <!-- region 活动名称 -->
          <el-form-item label="活动名称" prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <!-- endregion 活动名称 -->
          <!-- region 活动区域 -->
          <el-form-item label="活动区域" prop="option">
            <el-col class="select-col" :span="12">
              <el-select v-model="form.option" multiple placeholder="请选择活动区域">
                <el-option v-for="item in form.options"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value">
                </el-option>
              </el-select>
            </el-col>
          </el-form-item>
          <!-- endregion 活动区域 -->
          <!-- region 活动时间 -->
          <el-form-item label="活动时间" required>
            <el-col class="start-col" :span="12">
              <el-form-item prop="startTime">
                <el-date-picker v-model="form.startTime" type="datetime" placeholder="请选择开始时间"
                                style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col class="end-col" :span="12">
              <el-form-item prop="endTime">
                <el-date-picker v-model="form.endTime" type="datetime" placeholder="请选择结束时间"
                                style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <!-- endregion 活动时间 -->
          <!-- region 及时配送 -->
          <el-form-item label="及时配送" prop="delivery">
            <el-switch v-model="form.delivery"></el-switch>
          </el-form-item>
          <!-- endregion 及时配送 -->
          <!-- region 活动性质 -->
          <el-form-item label="活动性质" prop="type">
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
              <el-checkbox label="地推活动" name="type"></el-checkbox>
              <el-checkbox label="线下主题活动" name="type"></el-checkbox>
              <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <!-- endregion 活动性质 -->
          <!-- region 特殊资源 -->
          <el-form-item label="特殊资源" prop="resource">
            <el-radio-group v-model="form.resource">
              <el-radio label="线上品牌商赞助"></el-radio>
              <el-radio label="线下场地免费"></el-radio>
            </el-radio-group>
          </el-form-item>
          <!-- endregion 特殊资源 -->
          <!-- region 活动形式 -->
          <el-form-item label="活动形式" prop="desc">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
          <!-- endregion 活动形式 -->
          <!-- region 立即创建 -->
          <el-form-item>
            <el-button type="primary" @click="onSubmit('form')">立即创建</el-button>
            <el-button @click="resetForm('form')">取消</el-button>
          </el-form-item>
          <!-- endregion 立即创建 -->
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { Message } from 'element-ui'

export default {
  components: {},
  data () {
    return {
      labelPosition: 'left',
      form: {
        name: '',
        option: '',
        options: [{
          value: '1',
          label: '黄金糕'
        }, {
          value: '2',
          label: '双皮奶'
        }, {
          value: '3',
          label: '蚵仔煎'
        }, {
          value: '4',
          label: '龙须面'
        }, {
          value: '5',
          label: '北京烤鸭'
        }],
        startTime: '',
        endTime: '',
        delivery: false,
        type: [],
        resource: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        option: [
          { type: 'array', required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        startTime: [
          { type: 'date', required: true, message: '请选择开始时间', trigger: 'change' }
        ],
        endTime: [
          { type: 'date', required: true, message: '请选择结束时间', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
  },
  mounted () {
  },
  computed: {},
  methods: {
    onSubmit (formName) {
      console.log('onSubmit')
      this.$refs[formName].validate((valid) => {
        if (valid) {
          Message.success('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
.form-page {
  background-color: #fff;
  padding: 40px;
  .select-col {
    padding-left: 0 !important;
    .el-select {
      width: 100%;
    }
  }
  .start-col {
    padding-left: 0 !important;
  }
  .end-col {
    padding-right: 0 !important;
  }
}
</style>
