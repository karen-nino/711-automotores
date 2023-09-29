import React from 'react'

const modal = () => {
  return (
<div class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
	<div>
		<label for="tw-modal" class="cursor-pointer rounded bg-black px-8 py-4 text-white active:bg-slate-400">OPEN MODAL</label>
	</div>

	<input type="checkbox" id="tw-modal" class="peer fixed apparence-none opacity-0"/>
	<label for="tw-modal" class="pointer-events-none invisible fixed inset-0 flex cursor-pointer items-center justify-center overflow-hidden overscroll-contain bg-slate-700/30 opacity-0 transition-all duration-200 ease-in-out peer-checked:pointer-events-auto peer-checked:visible peer-checked:opacity-100 peer-checked:[&>*]:translate-y-0 peer-checked:[&>*]:scale-100">
		<label class="max-h-[calc(100vh - 5em) h-fit max-w-lg scale-90 overflow-y-auto overscroll-cotain rounded-md bg-white p-6 text-black shadow-2xl transition]" for="">
			<h3 class="text-lg font-bold">Modal opened!</h3>
			<p class="py-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		</label>
	</label>
</div>
  )
}

export default modal