const getComponentReadyOnActions = ({ routes }) =>
	routes.reduceRight((readyOnActions, currRoute) => {
		if (!readyOnActions && currRoute.component.readyOnActions) {
			readyOnActions = currRoute.component.readyOnActions
		}
		return readyOnActions
	}, null)

export default getComponentReadyOnActions
