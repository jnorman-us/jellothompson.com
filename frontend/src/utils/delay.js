export default function(time)
{
	return (new Promise(function(callback) {
		setTimeout(function() {
			callback();
		}, time);
	}));
}
