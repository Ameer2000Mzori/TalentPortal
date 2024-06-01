type dataType = {
  data: string
}

export default function SelectedJob({ data }: dataType) {
  console.log('data', data)
  return <div>job</div>
}
