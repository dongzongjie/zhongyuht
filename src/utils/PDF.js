// import html2Canvas from 'html2canvas';
// import JsPDF from 'jspdf';
//  
// export default {
//  install (Vue, options) {
//   Vue.prototype.getPdf = function () {
//    var title = this.pdfTitle; // 导出的pdf文件名
//    html2Canvas(document.querySelector(this.pdfSelector), { //导出的html元素
//     allowTaint: true
//    }).then(function (canvas) {
//     let contentWidth = canvas.width;
//     let contentHeight = canvas.height;
//     let pageHeight = contentWidth / 592.28 * 841.89;
//     let leftHeight = contentHeight;
//     let position = 0;
//     let imgWidth = 595.28;
//     let imgHeight = 592.28 / contentWidth * contentHeight;
//     let pageData = canvas.toDataURL('image/jpeg', 1.0);
//     let PDF = new JsPDF('', 'pt', 'a4');
//     if (leftHeight < pageHeight) {
//      PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
//     } else {
//      while (leftHeight > 0) {
//       PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight);
//       leftHeight -= pageHeight;
//       position -= 841.89;
//       if (leftHeight > 0) {
//        PDF.addPage();
//       }
//      }
//     }
//     PDF.save(title + '.pdf');
//    })
//   }
//  }
// }


/* <template>
 <div id="pdfPrint">
    <!-- 调用getPdf方法 -->
    <el-button @click="getPdf('#pdfPrint')">保存为PDF</el-button>
 </div>
</template>
 
<script>
export default {
 data() {
  return {
   // 填入导出的pdf文件名和html元素
   pdfTitle: '因子评价报告',
   pdfSelector: '#pdfPrint',
  }
 }, */