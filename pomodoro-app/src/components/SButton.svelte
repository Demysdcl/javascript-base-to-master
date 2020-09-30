<script lang="ts">
	type ButtonType = 'button' | 'submit' | 'menu' | 'reset'
	export let title = 'Insert title'
	export let className = ''
	export let style = ''
	export let icon: boolean = false
	export let type: ButtonType = 'button'
</script>

<style>
	button {
		background-color: var(--primary-color);
		border: none;
		cursor: pointer;
		padding: 10px 25px;
		color: #fff;
		transition: background-color 300ms ease-in-out;
		margin: 20px auto;
		transition: transform 0.3s;
	}

	button:hover {
		transform: scale(1.1, 1.1);
	}

	.working {
		background-color: var(--secondary-color);
	}

	i {
		display: none;
	}

	.icon {
		display: block;
	}
</style>

<button {type} {style} class={className} on:click>
	<slot>{!icon ? title : ''}</slot>
	<i class="material-icons-outlined" class:icon>{title}</i>
</button>
