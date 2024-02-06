import { observer } from "mobx-react-lite"
import { useStore } from "../../app/stores/store"

export default observer(function ServerError() {
    const {commonStore} = useStore()

    return (
        <div className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-3">
                <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Server Error</h2>
                <p className="mt-4 text-base leading-7 text-red-600">
                  {commonStore.error?.message}
                </p>
              </div>
              {commonStore.error?.details && (
                <div className="mt-10 lg:col-span-9 lg:mt-0">
                    <p className="">
                    {commonStore.error?.details}
                    </p>
                </div>                
              )}
            </div>
          </div>
        </div>
      )
})



