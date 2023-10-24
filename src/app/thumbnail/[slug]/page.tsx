export default function ThumbnailDetail({
	params,
	searchParams,
}: {
	params: { slug: string }
	searchParams: { [key: string]: string | string[] | undefined }
}) {
	return (
		<div>detail {params.slug} - {searchParams.search}</div>
	)
}
