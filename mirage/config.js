export default function() {
  this.get('/tournaments', function() {
    return {
      data: [{
        type: 'tournaments',
        id: 1,
        attributes: {
          title: 'Elite Beach Volleyball',
          divisions: 'Juniors, Adults',
          location: 'Daytona Beach',
          date: 'July 9th, 2016',
          image:'http://thenvl.com/wp-content/uploads/2015/02/Unknown.jpeg'
        }
      }, {
        type: 'tournaments',
        id: 2,
        attributes: {
          title: 'SSOVA',
          divisions: 'Juniors, Adults',
          location: 'Clearwater @ Frenchys',
          date: 'July 16th, 2016',
          image:'http://frenchysonline.com/wp-content/uploads/2012/01/rockaway-exterior_1.jpg'
        }
      }, {
        type: 'tournaments',
        id: 3,
        attributes: {
          title: 'Elite Beach Volleyball',
          divisions: 'Juniors, Adults',
          location: 'Clearwater @ Pier 60',
          date: 'August 6th, 2016',
          image:'http://frenchysonline.com/wp-content/uploads/2012/01/rockaway-exterior_1.jpg'
        }
      }]
    };
  });
}
