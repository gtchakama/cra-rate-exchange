import {
  usePDF,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});
const MyDoc = (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Employee Table</Text>
      </View>
      <View style={styles.section}>
        <Text>Employee Data</Text>
      </View>
    </Page>
  </Document>
);

const DownloadRep = () => {
  const [instance, updateInstance] = usePDF({ document: MyDoc });

  if (instance.loading) return <div>Loading ...</div>;

  if (instance.error)
    return <div>Something went wrong generating Report. </div>;

  return (
    <div className="p-12">
      <a
        className="border border-indigo-300 text-indigo-300 py-4 px-8 rounded tracking-wide mr-4 font-display focus:outline-none focus:shadow-outline  
    "
        href={instance.url}
        download="report.pdf"
      >
        Download
      </a>
    </div>
  );
};
export default DownloadRep;
